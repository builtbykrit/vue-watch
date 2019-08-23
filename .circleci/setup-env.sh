case $CIRCLE_BRANCH in
    "development")
        export BUILD_NAME="dev"
        export AWS_BUCKET_NAME="dev.vuewatch.com"
        export CLOUDFRONT_DISTRIBUTION_ID="E2QBWI5C3M8RR2"
        ;;
    "master")
        export BUILD_NAME="prod"
        export AWS_BUCKET_NAME="vuewatch.com"
        export CLOUDFRONT_DISTRIBUTION_ID="E1RQG2TMWYYQNZ"
        ;;
esac