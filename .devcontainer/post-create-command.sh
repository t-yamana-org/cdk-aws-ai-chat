#!/bin/bash

# CDK インストール
npm install -g aws-cdk

# git-secrets インストール
git clone https://github.com/awslabs/git-secrets.git /tmp/git-secrets
cd /tmp/git-secrets && sudo make install

# このリポジトリに git-secrets を設定
cd /workspaces/cdk-aws-ai-chat
git secrets --register-aws

# lint-staged + git-secrets のセットアップ
cd frontend && npm run prepare

# FIXME: kiro-cli のインストール方法は未確定

# uv インストール (Amazon Q MCP サーバー用)
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

# スクリプトが成功したことを示すために、終了コード0で終了
exit 0
