// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "软件包安装程序",
  "id": "com.google.android.packageinstaller",
  "groups": [
    {
      "name": "功能类-自动安装/更新软件",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"安装\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14046939"
        },
        {
          "matches": "[text=\"更新\"][clickable=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14047571",
            "https://i.gkd.li/i/14047854"
          ]
        },
        {
          "matches": "[text=\"完成\"][clickable=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14047514",
            "https://i.gkd.li/i/14047969",
            "https://i.gkd.li/i/16435556"
          ]
        },
        {
          "matches": [
            "[text=\"要更新此应用吗？\" || text=\"要安装此应用吗？\"]",
            "[text=\"取消\"]"
          ],
          "excludeMatches": [
            "[text=\"更新\"][clickable=true]",
            "[text=\"安装\"][clickable=true]"
          ],
          "position": {
            "left": "width * 1.4975",
            "top": "height * 0.5"
          },
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/16406316",
            "https://i.gkd.li/i/16435642"
          ]
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"安装\"][clickable=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14046939"
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"更新\"][clickable=true]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14047571",
            "https://i.gkd.li/i/14047854"
          ]
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"完成\"][clickable=true]",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/14047514",
            "https://i.gkd.li/i/14047969"
          ]
        }
      ]
    },
    {
      "name": "功能类-安全警告弹窗",
      "desc": "点击[设置]",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"出于安全考虑\"]",
            "[text=\"设置\"]"
          ],
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16406317",
          "exampleUrls": "https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-安装未知应用设置",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"禁止您的手机安装来自此来源的未知应用\"]",
            "[text=\"设置\"]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14080242"
        }
      ]
    }
  ]
});
