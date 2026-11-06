// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WPS Office Lite",
  "id": "cn.wps.moffice_i18n",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<90 && height<90] < LinearLayout + [text=\"确定退出吗？\"]",
          "activityIds": "cn.wps.moffice.func.pdf.OverseaPayActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23577702"
        },
        {
          "matches": "@ImageView[clickable=true][width<90 && height<90] <n [childCount=2] <n [childCount=2] < [vid=\"TANGRAM_VIEW_CONTAINER_ID\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23578206"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"开启通知权限\"]",
            "@[clickable=true] >2 [text=\"别再烦我\"]"
          ],
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23577888",
          "key": 0
        }
      ]
    }
  ]
});
