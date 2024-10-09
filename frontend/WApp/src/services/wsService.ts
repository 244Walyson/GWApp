import { BASE_URL_WS } from '@/utils/system';
import { Client } from '@stomp/stompjs';
import { getAccessToken } from './authService';

class WebSocketService {
  private client: Client;
  private connectPromise: Promise<void>;
  private resolveConnectPromise: (() => void | undefined) | undefined;

  constructor() {
    const accessToken = getAccessToken();
    this.client = new Client({
      brokerURL: `${BASE_URL_WS}/ws/connect?token=${accessToken}`, // Substituir http por ws
      reconnectDelay: 5000,
      debug: (str) => console.log(str), // Adiciona logs de debug
    });

    this.connectPromise = new Promise((resolve) => {
      this.resolveConnectPromise = resolve;
    });

    this.client.onConnect = () => {
      console.log('Conectado ao WebSocket');
      if (this.resolveConnectPromise) {
        this.resolveConnectPromise();
      }
    };

    this.client.onStompError = (frame) => {
      console.error(`Erro do broker: ${frame.headers['message']}`);
    };

    this.client.activate();
  }

  // Método para esperar a conexão
  waitForConnection(): Promise<void> {
    return this.connectPromise;
  }

  subscribe(topic: string, onMessage: (message: any) => void) {
    this.connectPromise.then(() => {
      this.client.subscribe(topic, (message) => {
        const parsedMessage = JSON.parse(message.body);
        onMessage(parsedMessage);
      });
    }).catch((error) => {
      console.error('Erro ao inscrever-se no tópico:', error);
    });
  }

  sendMessage(destination: string, payload: any) {
    this.connectPromise.then(() => {
      if (this.client.connected) {
        this.client.publish({
          destination,
          body: JSON.stringify(payload),
        });
      } else {
        console.warn('Não foi possível enviar a mensagem: WebSocket não conectado.');
      }
    });
  }

  disconnect() {
    if (this.client.connected) {
      this.client.deactivate();
    }
  }
}

const WebsocketService = new WebSocketService();
export default WebsocketService;
