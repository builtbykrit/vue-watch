case $CIRCLE_BRANCH in
    "development")
        export BUILD_NAME="dev"
        ;;
    "master")
        export BUILD_NAME="prod"
        ;;
esac