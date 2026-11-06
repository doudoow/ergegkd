// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "权限控制器",
  "id": "com.android.permissioncontroller",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "desc": "点击不允许",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"位置信息权限\"]",
            "Button[text=\"不允许\"][clickable=true]"
          ],
          "activityIds": ".permission.ui.GrantPermissionsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24759204",
          "exampleUrls": "https://e.gkd.li/801303af-ac30-4d06-b2f8-cfea98aa847a",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"位置信息\"]",
            "[text=\"不允许\" || text=\"禁止\"][clickable=true]"
          ],
          "activityIds": [
            ".permission.ui.GrantPermissionsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/24759204",
            "https://i.gkd.li/i/30746977"
          ],
          "exampleUrls": "https://e.gkd.li/801303af-ac30-4d06-b2f8-cfea98aa847a",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-vivo-指定媒体内容",
      "desc": "app最小权限原则授予指定图片/视频",
      "actionMaximum": 1,
      "actionDelay": 400,
      "forcedTime": 6000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"picture_control_layout\"] > @[vid=\"control_picture_click_view\"][clickable=true] > [vid=\"access_title\"][visibleToUser=true]",
          "key": 0,
          "name": "下拉菜单",
          "snapshotUrls": "https://i.gkd.li/i/26150081",
          "exampleUrls": "https://e.gkd.li/13fa7148-f101-4bbd-a1dd-9fbae4dea109"
        },
        {
          "matches": "[vid=\"control_picture_click_view\"] + [vid=\"picture_control_view\"] >2 @[vid=\"picture_control\"][clickable=true][visibleToUser=true]",
          "excludeMatches": "[vid=\"vivo_pictures_control_view\"][childCount=2]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "照片访问范围",
          "snapshotUrls": "https://i.gkd.li/i/26150082",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26150524",
          "exampleUrls": "https://e.gkd.li/95f09c34-546b-436a-ac93-a5aa1cad687b"
        },
        {
          "matches": "ListView > * + @* > [vid=\"item_content_with_dot\"] > [vid=\"item_content\"][visibleToUser=true]",
          "preKeys": [
            1
          ],
          "name": "指定照片",
          "snapshotUrls": "https://i.gkd.li/i/26150084",
          "exampleUrls": "https://e.gkd.li/2b275e04-ae32-4e0e-80c9-411a15fc1f1a",
          "key": 2
        },
        {
          "matches": "@[vid=\"picture_set\"][clickable=true] <2 [vid=\"vivo_pictures_control_view\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "name": "管理指定照片",
          "snapshotUrls": "https://i.gkd.li/i/26150524",
          "exampleUrls": "https://e.gkd.li/434e23e3-ed97-4815-8896-aa0e50833cdd",
          "key": 3
        }
      ]
    }
  ]
});
