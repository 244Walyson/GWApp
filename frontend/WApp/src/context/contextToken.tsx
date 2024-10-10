import { createContext } from "react";
import { AccessTokenPayload } from "../models/auth";

export type ContextTokenType = {
  contextTokenPayload: AccessTokenPayload | undefined;
  setContextTokenPayload: (
    AccessTokenPayload: AccessTokenPayload | undefined
  ) => void;
};

export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => {},
});
