module.exports = ({ env }) => ({
	upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        endpoint: env('AWS_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
});