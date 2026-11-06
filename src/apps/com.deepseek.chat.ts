// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "DeepSeek",
  "id": "com.deepseek.chat",
  "groups": [
    {
      "name": "功能类-自动折叠思考过程",
      "desc": "二选一",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"正在思考\" || text^=\"已思考\"] + View[desc=\"折叠\"]",
          "activityIds": "com.deepseek.chat.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/23982641",
            "https://i.gkd.li/i/23982613",
            "https://i.gkd.li/i/23982615"
          ],
          "key": 0
        },
        {
          "matches": "@[clickable=true] > [text*=\"思考\"] + View[desc=\"折叠\"]",
          "actionCd": 3000,
          "activityIds": ".MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/23982641",
            "https://i.gkd.li/i/23982613",
            "https://i.gkd.li/i/25364857"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23982615",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-思考完成后自动折叠思考过程",
      "desc": "二选一",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"已思考\" || text^=\"已深度思考\"] + View[desc=\"折叠\"]",
          "actionCd": 3000,
          "activityIds": ".MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/23982613",
            "https://i.gkd.li/i/25364857"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23982641",
            "https://i.gkd.li/i/23982615"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-选中快速模式时自动切换至专家模式",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"使用快速模式开始对话\"]",
            "@[clickable=true] > [text=\"专家模式\"]"
          ],
          "activityIds": ".MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/30698460",
            "https://i.gkd.li/i/30698458",
            "https://i.gkd.li/i/30698461"
          ],
          "key": 0
        }
      ]
    }
  ]
});
