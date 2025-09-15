default:
	@just --list

dev:
	watchexec --no-vcs-ignore --restart --exts mbt --clear --project-origin . -q "tput reset && moon run cmd/main/main.mbt"
