import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { dynamodbStreamFunction } from './data/dynamodb-stream-function/resource';
import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { StartingPosition } from 'aws-cdk-lib/aws-lambda';

const backend = defineBackend({
  auth,
  data,
  dynamodbStreamFunction,
});

const eventSource = new DynamoEventSource(backend.data.resources.tables["Todo"], {
    startingPosition: StartingPosition.LATEST,
})

backend.dynamodbStreamFunction.resources.lambda.addEventSource(eventSource);
