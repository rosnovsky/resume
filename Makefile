.PHONY: build

build: ## Generate resume locally
	pnpm install
	pnpm build

help: ## Show this help
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage: make [target]\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  %-30s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
