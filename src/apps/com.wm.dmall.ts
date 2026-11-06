// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "多点",
  "id": "com.wm.dmall",
  "groups": [
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.wm.dmall:id/advert_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13197627",
          "exampleUrls": "https://e.gkd.li/60b65af4-7efa-4e82-b294-d96d5b426953"
        },
        {
          "matches": [
            "[id=\"com.wm.dmall:id/coupon_activity\"][text=\"去使用\"]",
            "[id=\"com.wm.dmall:id/iv_close\"]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13331283"
        },
        {
          "matches": "[vid=\"advert_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13197627",
          "exampleUrls": "https://e.gkd.li/60b65af4-7efa-4e82-b294-d96d5b426953"
        },
        {
          "matches": [
            "[vid=\"coupon_activity\"][text=\"去使用\"]",
            "[vid=\"iv_close\"]"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13331283"
        },
        {
          "matches": "[id=\"com.wm.dmall:id/advert_close\"]",
          "key": 4
        }
      ]
    },
    {
      "name": "局部广告-首页-浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "anyMatches": [
            "@[id=\"com.wm.dmall:id/iv_close\"] + [id=\"com.wm.dmall:id/view_float\"]",
            "[id=\"com.wm.dmall:id/close_iV\"]"
          ],
          "activityIds": "com.wm.dmall.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13197634",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13246242",
          "key": 0
        },
        {
          "anyMatches": [
            "@[vid=\"iv_close\"] + [vid=\"view_float\"]",
            "[vid=\"close_iV\"]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13197634",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13246242",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"com.wm.dmall:id/update_confirm_btn\"]",
            "[id=\"com.wm.dmall:id/close_btn\"]"
          ],
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13234668",
          "key": 0
        },
        {
          "matches": [
            "[id=\"com.wm.dmall:id/update_confirm_btn\"]",
            "[id=\"com.wm.dmall:id/close_btn\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13234668"
          ],
          "key": 1
        },
        {
          "matches": [
            "[vid=\"update_confirm_btn\"]",
            "[vid=\"close_btn\"]"
          ],
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13234668",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.wm.dmall:id/advert_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-优惠劵提示",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[id=\"com.wm.dmall:id/coupon_activity\"][text=\"去使用\"]",
            "[id=\"com.wm.dmall:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13331283"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-优惠劵提示",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[id=\"com.wm.dmall:id/coupon_activity\"][text=\"去使用\"]",
            "[id=\"com.wm.dmall:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13331283"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.wm.dmall:id/advert_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "优惠劵提示",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[id=\"com.wm.dmall:id/coupon_activity\"][text=\"去使用\"]",
            "[id=\"com.wm.dmall:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13331283"
          ],
          "key": 0
        }
      ]
    }
  ]
});
