-- Inserindo dados na tabela de times (tb_team)
INSERT INTO tb_team (name, occupation_area, description, img_url, github_link, total_collaborators, total_boards) VALUES ('Dev Team Alpha', 'Software Development', 'A team focused on building scalable applications.', 'https://example.com/devteamalpha.png', 'https://github.com/devteamalpha', 5, 2);

INSERT INTO tb_team (name, occupation_area, description, img_url, github_link, total_collaborators, total_boards) VALUES ('UX/UI Team Beta', 'Design', 'Responsible for creating user-centered design interfaces.', 'https://example.com/uxuiteambeta.png', 'https://github.com/uxuiteambeta', 3, 1);

-- Inserindo dados na tabela de quadros (tb_board)
INSERT INTO tb_board (title, total_cards, team_id) VALUES ('Kanban Board Alpha', 3, 1);

INSERT INTO tb_board (title, total_cards, team_id) VALUES ('Scrum Board Alpha', 2, 1);

INSERT INTO tb_board (title, total_cards, team_id) VALUES ('Design Board Beta', 1, 2);

-- Inserindo dados na tabela de cartões (tb_card)
INSERT INTO tb_card (title, description, card_position, board_id, done) VALUES ('Create Backend', 'Develop backend services for the project.', 1, 1, false);

INSERT INTO tb_card (title, description, card_position, board_id, done) VALUES ('Design Database', 'Design the database structure.', 2, 1, true);

INSERT INTO tb_card (title, description, card_position, board_id, done) VALUES ('Implement CI/CD', 'Setup CI/CD pipelines.', 3, 1, false);

INSERT INTO tb_card (title, description, card_position, board_id, done) VALUES ('Sprint Planning', 'Plan tasks for the sprint.', 1, 2, true);

INSERT INTO tb_card (title, description, card_position, board_id, done) VALUES ('User Interface Mockups', 'Create mockups for the user interface.', 1, 3, false);
