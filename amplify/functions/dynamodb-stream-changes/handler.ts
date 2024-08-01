import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger({
    logLevel: "INFO",
    serviceName: "stream-chapter-changes",
});

export const handler: DynamoDBStreamHandler = async (event) => {
    for (const record of event.Records) {
        logger.info(`Processing record ${record.eventID}`);
    }
};
