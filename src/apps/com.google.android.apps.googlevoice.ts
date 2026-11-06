// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Voice",
  "id": "com.google.android.apps.googlevoice",
  "groups": [
    {
      "name": "功能类-跳过实体号码链接",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\" || text=\"將這個裝置連結到 Google Voice\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13314255",
            "https://i.gkd.li/i/13437190",
            "https://i.gkd.li/i/23205177"
          ],
          "key": 0
        },
        {
          "matches": [
            "[vid=\"title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\" || text=\"將這個裝置連結到 Google Voice\"]",
            "[vid=\"skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13314255",
            "https://i.gkd.li/i/13437190",
            "https://i.gkd.li/i/23205177"
          ],
          "key": 1
        },
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13314255",
            "https://i.gkd.li/i/13437190"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-跳过实体号码链接",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13314255",
            "https://i.gkd.li/i/13437190"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-跳过实体号码链接",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13314255",
            "https://i.gkd.li/import/13437190"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "跳过实体号码链接",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13314255",
            "https://i.gkd.li/import/13437190"
          ],
          "key": 0
        }
      ]
    }
  ]
});
