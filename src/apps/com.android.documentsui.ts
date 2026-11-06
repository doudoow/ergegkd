// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "文件",
  "id": "com.android.documentsui",
  "groups": [
    {
      "name": "功能类-允许第三方应用访问文件夹",
      "desc": "点击允许",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"要允许\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "activityIds": "com.android.documentsui.picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13801468",
          "key": 0
        },
        {
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "key": 1
        },
        {
          "matches": [
            "[text^=\"要允许\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "activityIds": ".picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13801468",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-使用此文件夹",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"使用此文件夹\"]",
          "activityIds": "com.android.documentsui.picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13916082",
          "key": 0
        },
        {
          "matches": "[text=\"使用此文件夹\"]",
          "activityIds": "com.android.documentsui.picker.PickActivity",
          "snapshotUrls": "https://i.gkd.li/i/13916082",
          "key": 1
        },
        {
          "matches": "[text=\"使用此文件夹\"]",
          "activityIds": ".picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13916082",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动选择排序方式[修改日期（从新到旧）]",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"修改日期（从新到旧）\"][checked=false][visibleToUser=true]",
          "activityIds": ".picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23096908",
          "exampleUrls": "https://e.gkd.li/bf621eae-8268-4381-aa46-4161c7811cbe",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动选择排序方式",
      "desc": "选择[修改日期(从新到旧)]",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"修改日期（从新到旧）\"][checked=false][visibleToUser=true]",
          "activityIds": ".picker.PickActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23096908",
          "exampleUrls": "https://e.gkd.li/bf621eae-8268-4381-aa46-4161c7811cbe",
          "key": 0
        }
      ]
    }
  ]
});
