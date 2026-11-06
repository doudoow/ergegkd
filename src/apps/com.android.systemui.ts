// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "系统界面",
  "id": "com.android.systemui",
  "groups": [
    {
      "name": "功能类-自动允许网易云音乐共享整个屏幕",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"要与“网易云音乐”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23451390"
        },
        {
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23451403"
        },
        {
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23451416"
        }
      ]
    },
    {
      "name": "功能类-自动允许白描共享整个屏幕",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"要与“白描”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23451390"
        },
        {
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23451403"
        },
        {
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23451416"
        }
      ]
    },
    {
      "name": "功能类-自动允许QQ音乐共享整个屏幕",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"要与“QQ音乐”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23451390"
        },
        {
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23451403"
        },
        {
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23451416"
        }
      ]
    },
    {
      "name": "功能类-自动允许USB调试",
      "desc": "点击 ①✅一律允许 ②确定",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text$=\"这台计算机进行调试\"][clickable=true][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25254577",
            "https://i.gkd.li/i/25256690",
            "https://i.gkd.li/i/25256846",
            "https://i.gkd.li/i/25257004",
            "https://i.gkd.li/i/25619878",
            "https://i.gkd.li/i/25619884"
          ],
          "exampleUrls": "https://e.gkd.li/124fdf00-8901-463e-bb0b-ed6e8aadf3f7"
        },
        {
          "matches": "[text=\"允许\" || text=\"确定\"][clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动允许无线调试(真我📱)",
      "desc": "点击 ①✅始终允许 ②允许",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text$=\"通过此网络进行调试\"][clickable=true][checked=false]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25256451",
          "exampleUrls": "https://e.gkd.li/7e2c5172-1b35-4ddf-8a4c-b19d25330d64"
        },
        {
          "matches": "[text=\"允许\" || text=\"确定\"][clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1
        }
      ]
    }
  ]
});
