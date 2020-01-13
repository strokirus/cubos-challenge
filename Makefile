setup:
	@echo "Installing root dependencies"
	(npm install)

test:
	@echo "Start testing"
	(npm run test)

dev:
	(npm start)