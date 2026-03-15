# cdk-aws-ai-chat

## CloudFormation Stacks

sandbox 環境は毎回立ち上げ、Amplify アプリはキープ

| Stack | Resources | Keep alive? |
|---|---|---|
| Amplify Hosting app (Amplify console) | App outline, IAM role attached | ✅ Keep — IAM role is attached once and reused |
| `amplify-awsaichat-node-sandbox-<hash>` | Root sandbox stack | ❌ Destroy after each session |
| `auth179371D7-...` | Cognito User Pool | ❌ Destroy after each session |
| `data7552DF31-...` | AppSync / DynamoDB | ❌ Destroy after each session |
| `amplifyDataChatNestedStack-...` | Chat data model | ❌ Destroy after each session |
| `amplifyDataAmplifyTableManager-...` | DynamoDB table manager | ❌ Destroy after each session |

Destroy all sandbox stacks at once after each session:

```bash
cd frontend
npm run amplify:delete
```
