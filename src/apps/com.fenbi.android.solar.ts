// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小猿搜题",
  "id": "com.fenbi.android.solar",
  "groups": [
    {
      "name": "评价提示",
      "desc": "点击\"返回\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.solar:id/tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14136539",
          "exampleUrls": "https://m.gkd.li/57941037/7864769f-542c-4f76-8b90-4d030b53651b",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14136539",
          "exampleUrls": "https://m.gkd.li/57941037/7864769f-542c-4f76-8b90-4d030b53651b",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-年卡广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.solar:id/v_firework_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16759322",
          "exampleUrls": "https://e.gkd.li/874cdabf-8e49-4c6d-8fd0-48effd6e44e9",
          "key": 0
        },
        {
          "matches": "[vid=\"v_firework_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16759322",
          "exampleUrls": "https://e.gkd.li/874cdabf-8e49-4c6d-8fd0-48effd6e44e9",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-升级提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"com.fenbi.android.solar:id/text_upgrade\"]",
            "[id=\"com.fenbi.android.solar:id/img_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13246056",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"com.fenbi.android.solar:id/text_upgrade\"]",
            "[id=\"com.fenbi.android.solar:id/img_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13246056",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[id=\"com.fenbi.android.solar:id/text_upgrade\"]",
            "[id=\"com.fenbi.android.solar:id/img_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13246056",
          "key": 0
        }
      ]
    }
  ]
});
