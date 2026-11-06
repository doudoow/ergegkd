// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "浙里办",
  "id": "com.hanweb.android.zhejiang.activity",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.hanweb.android.zhejiang.activity:id/iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "actionMaximum": 1,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13402048"
        },
        {
          "matches": "LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text=\"立即升级\"]",
          "actionMaximumKey": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13520598"
        },
        {
          "matches": "[text=\"版本更新\"] - [id=\"com.hanweb.android.zhejiang.activity:id/rl_back\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13521059"
        },
        {
          "matches": "@[vid=\"iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "actionMaximum": 1,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13402048"
        },
        {
          "matches": "[text=\"版本更新\"] - [vid=\"rl_back\"]",
          "preKeys": [
            1
          ],
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13521059"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.hanweb.android.zhejiang.activity:id/iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "actionMaximum": 1,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13402048"
        },
        {
          "matches": "LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text=\"立即升级\"]",
          "actionMaximumKey": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13520598"
        },
        {
          "matches": "[text=\"版本更新\"] - [id=\"com.hanweb.android.zhejiang.activity:id/rl_back\"]",
          "preKeys": 1,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13521059"
        }
      ]
    }
  ]
});
