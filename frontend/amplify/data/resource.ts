import { a, type ClientSchema, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	Chat: a
		.model({
			id: a.id().required(),
			message: a.string().required(),
			userId: a.string().required(),
			createdAt: a.datetime(),
		})
		.authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: "userPool",
	},
});
