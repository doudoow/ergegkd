// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快连 VPN",
  "id": "world.letsgo.booster.android.pro",
  "groups": [
    {
      "name": "通知提示-各种提示弹窗",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我会设置\" || text=\"快快收下\" || text=\"知道了\"][visibleToUser=true]",
          "activityIds": [
            "world.letsgo.booster.android.pages.home.HomeActivity",
            "world.letsgo.booster.android.pages.guide.GuideActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23619426",
            "https://i.gkd.li/i/23619427",
            "https://i.gkd.li/i/23619428"
          ],
          "exampleUrls": [
            "https://e.gkd.li/0fe731a4-bf4c-4d35-a157-c1304e8df4ba",
            "https://e.gkd.li/efeb874b-f3bf-4899-a069-387d020eb1f5",
            "https://e.gkd.li/5868f38e-b929-4423-adfc-82b05ea1733c"
          ],
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
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"close_update_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-免费会员弹窗",
      "desc": "点击【快快收下】",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"快快收下\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-顶部横幅",
      "desc": "x掉",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"close_update_tip\"][clickable=true]",
          "activityIds": "world.letsgo.booster.android.pages.home.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "name": "①横幅更新提示",
          "snapshotUrls": "https://i.gkd.li/i/26395787"
        }
      ]
    }
  ]
});
