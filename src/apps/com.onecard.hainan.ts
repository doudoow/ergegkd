// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "海南一卡通",
  "id": "com.onecard.hainan",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662114",
            "https://i.gkd.li/import/12662136"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662114",
            "https://i.gkd.li/import/12662136"
          ],
          "key": 0
        }
      ]
    }
  ]
});
