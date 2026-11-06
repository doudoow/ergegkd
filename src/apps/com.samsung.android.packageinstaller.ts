// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "软件包安装程序",
  "id": "com.samsung.android.packageinstaller",
  "groups": [
    {
      "name": "功能类-跳过安全使用协议",
      "desc": "自动点击略过并关闭反恶意软件协议",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"是否打开反恶意软件\"]",
            "[text=\"取消\"]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13233686"
        },
        {
          "matches": "[text=\"略过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13255641"
        },
        {
          "matches": [
            "[text^=\"打开应用程序保护?\"]",
            "[text=\"取消\"]"
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13650528"
        }
      ]
    },
    {
      "name": "未分类-跳过安全使用协议",
      "desc": "自动点击略过并关闭反恶意软件协议",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text *=\"略过\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255641"
          ]
        },
        {
          "matches": [
            "[text^=\"是否打开反恶意软件\"]",
            "[text=\"取消\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13233686"
          ]
        },
        {
          "matches": [
            "[text^=\"打开应用程序保护?\"]",
            "[text=\"取消\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13650528"
          ]
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "x掉",
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true][id$=\"close\"] - [text=\"广告\"]",
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/32292609",
          "exampleUrls": "https://e.gkd.li/03f085e3-c1ca-4d0a-9b54-8dfadcbf2c8e",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-跳过安全使用协议",
      "desc": "自动点击略过并关闭反恶意软件协议",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text *=\"略过\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13255641"
          ]
        },
        {
          "matches": [
            "[text^=\"是否打开反恶意软件\"]",
            "[text=\"取消\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13233686"
          ]
        },
        {
          "matches": [
            "[text^=\"打开应用程序保护?\"]",
            "[text=\"取消\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13650528"
          ]
        }
      ]
    },
    {
      "name": "跳过安全使用协议",
      "desc": "自动点击略过并关闭反恶意软件协议",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text *=\"略过\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13255641"
          ]
        },
        {
          "matches": [
            "[text^=\"是否打开反恶意软件\"]",
            "[text=\"取消\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13233686"
          ]
        },
        {
          "matches": [
            "[text^=\"打开应用程序保护?\"]",
            "[text=\"取消\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13650528"
          ]
        }
      ]
    }
  ]
});
