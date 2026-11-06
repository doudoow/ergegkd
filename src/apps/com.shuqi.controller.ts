// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "书旗小说",
  "id": "com.shuqi.controller",
  "groups": [
    {
      "name": "局部广告",
      "key": 0,
      "rules": [
        {
          "anyMatches": [
            "[vid=\"promotion_close\"][visibleToUser=true]",
            "[visibleToUser=true][vid=\"promotion_close\"]"
          ],
          "activityIds": "com.shuqi.home.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23831955",
            "https://i.gkd.li/i/24859977"
          ],
          "exampleUrls": "https://e.gkd.li/a634cd5a-7b84-44ad-b65b-99f5e8769eeb"
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"bottomCloseImg\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.shuqi.home.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23831956",
          "exampleUrls": "https://e.gkd.li/9cfc90dc-9afe-45ff-8ee2-f8e173af9bd9"
        }
      ]
    },
    {
      "name": "未分类-内部右侧浮动广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/promotion_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-关闭打卡红包弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/bottomCloseImg\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-阅读页面底部广告",
      "desc": "点击关闭x图标-关闭优惠券弹窗-关闭当前广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/right_close_ad_text\"]",
          "activityIds": "com.shuqi.android.ui.dialog",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12513893"
        },
        {
          "matches": [
            "[text*=\"优惠券\"]",
            "[id=\"com.shuqi.controller:id/close_btn\"]"
          ],
          "activityIds": "com.shuqi.monthlypay.view",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12513908"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout [id=\"com.shuqi.controller:id/noah_tv_stencil_native_source\"]",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12513860"
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/banner_container_ad\"] >n RelativeLayout + ImageView",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12901429"
        }
      ]
    },
    {
      "name": "未分类-听书页面底部广告",
      "desc": "点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/remove_current_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513959",
          "key": 0
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/ad_close_but\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513944",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-内部右侧浮动广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/promotion_close\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/promotion_close\"]",
          "activityIds": "com.shuqi.home.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12513811",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-关闭打卡红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/bottomCloseImg\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/bottomCloseImg\"]",
          "activityIds": "com.shuqi.common",
          "snapshotUrls": "https://i.gkd.li/i/12513822",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-阅读页面底部广告",
      "desc": "点击关闭x图标-关闭优惠券弹窗-关闭当前广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/right_close_ad_text\"]",
          "activityIds": "com.shuqi.android.ui.dialog",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12513893"
        },
        {
          "matches": [
            "[text*=\"优惠券\"]",
            "[id=\"com.shuqi.controller:id/close_btn\"]"
          ],
          "activityIds": "com.shuqi.monthlypay.view",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12513908"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout [id=\"com.shuqi.controller:id/noah_tv_stencil_native_source\"]",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12513860"
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/banner_container_ad\"] >n RelativeLayout + ImageView",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12901429"
        }
      ]
    },
    {
      "name": "局部广告-听书页面底部广告",
      "desc": "点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/remove_current_ad\"]",
          "snapshotUrls": "https://i.gkd.li/import/12513959",
          "key": 0
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/ad_close_but\"]",
          "snapshotUrls": "https://i.gkd.li/import/12513944",
          "key": 1
        }
      ]
    },
    {
      "name": "内部右侧浮动广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/promotion_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭打卡红包弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/bottomCloseImg\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "阅读页面底部广告",
      "desc": "点击关闭x图标-关闭优惠券弹窗-关闭当前广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/right_close_ad_text\"]",
          "activityIds": "com.shuqi.android.ui.dialog",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12513893"
        },
        {
          "matches": [
            "[text*=\"优惠券\"]",
            "[id=\"com.shuqi.controller:id/close_btn\"]"
          ],
          "activityIds": "com.shuqi.monthlypay.view",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12513908"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout [id=\"com.shuqi.controller:id/noah_tv_stencil_native_source\"]",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12513860"
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/banner_container_ad\"] >n RelativeLayout + ImageView",
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12901429"
        }
      ]
    },
    {
      "name": "听书页面底部广告",
      "desc": "点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/remove_current_ad\"]",
          "snapshotUrls": "https://i.gkd.li/import/12513959",
          "key": 0
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/ad_close_but\"]",
          "snapshotUrls": "https://i.gkd.li/import/12513944",
          "key": 1
        }
      ]
    }
  ]
});
