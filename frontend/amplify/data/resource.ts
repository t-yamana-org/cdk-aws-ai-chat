import { a, type ClientSchema, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	Message: a
		.model({
			conversationId: a.id().required(),
			conversation: a.belongsTo("Conversation", "conversationId"),
			sender: a.string(),
			content: a.string(),
		})
		.authorization((allow) => [allow.owner()]),

	Conversation: a
		.model({
			title: a.string().required(),
			messages: a.hasMany("Message", "conversationId"),
		})
		.authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
	// authorizationModes: {defaultAuthorizationMode: "userPool"},
});
