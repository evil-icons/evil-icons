.PHONY: publish

publish:
	bundle exec rake evil_icons:process
	bundle exec rake evil_icons:publish