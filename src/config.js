export default {
  MAX_ATTACHMENT_SIZE: 5000000, 
  STRIPE_KEY: "pk_test_NDXAjHf6FR0C2VqpSi6KJPci00pQU27WeX", 
  s3: {
    REGION: "us-east-1",
    BUCKET: "notessls-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0e2pfwlfu8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wDjFgbL4D",
    APP_CLIENT_ID: "2cn7tek2morvamtc1142p4kdtq",
    IDENTITY_POOL_ID: "us-east-1:bfbcee20-0eac-4ff8-8531-19e55ee8256f"
  }
};

