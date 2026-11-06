// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Facebook",
  "id": "com.facebook.katana",
  "groups": [
    {
      "name": "功能类-自动点击[查看翻译]",
      "key": 0,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] > [visibleToUser=true][text=\"查看翻译\"] <<n [id=\"android:id/list\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/21955231",
          "exampleUrls": "https://e.gkd.li/8801f1f5-ddcb-45b2-9f19-c82e9d1271f1"
        },
        {
          "matches": "[text=\"查看翻译\"][clickable=true][visibleToUser=true]",
          "actionCd": 300,
          "matchRoot": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/24712867",
            "https://i.gkd.li/i/24717051"
          ],
          "exampleUrls": "https://e.gkd.li/a111f9dc-8604-45f5-ba0c-22606890c338"
        }
      ]
    }
  ]
});
