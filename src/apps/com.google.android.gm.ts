// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Gmail",
  "id": "com.google.android.gm",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "右滑删除⚠️该规则需v1.12.0及以上版本可使用",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.google.android.gm:id/basic_ad_teaser_info_icon\" || id=\"com.google.android.gm:id/button_chip_ad_teaser_info_icon\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255698",
            "https://i.gkd.li/i/13255698"
          ]
        },
        {
          "matches": "Button[visibleToUser=true][text=\"屏蔽此广告\" || text^=\"Block\" || desc=\"屏蔽\"] <<n [vid=\"my_ad_center_dialog\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255700",
            "https://i.gkd.li/i/13724271",
            "https://i.gkd.li/i/20585351"
          ]
        },
        {
          "matches": "Button[visibleToUser=true][text=\"继续\" || text=\"Continue\"] <<n [id=\"com.google.android.gm:id/my_ad_center_dialog\"]",
          "preKeys": [
            5
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255701",
            "https://i.gkd.li/i/13724287"
          ]
        },
        {
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "preKeys": [
            6
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13263279"
        },
        {
          "matches": "@[childCount=7][vid$=\"ad_teaser_item\"] >2 [vid=\"ad_badge_text\"]",
          "action": "swipe",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255698",
            "https://i.gkd.li/i/25542293"
          ]
        },
        {
          "matches": "[vid=\"basic_ad_teaser_info_icon\" || vid=\"button_chip_ad_teaser_info_icon\"][clickable=true]",
          "actionMaximum": 1,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255698",
            "https://i.gkd.li/i/25542293"
          ]
        },
        {
          "anyMatches": [
            "@Button[text=\"屏蔽此广告\" || text^=\"Block\"][clickable=true] <<n [vid=\"my_ad_center_dialog\"]",
            "@Button[desc=\"屏蔽\"][clickable=true] <<n [vid=\"my_ad_center_dialog\"]"
          ],
          "action": "clickCenter",
          "preKeys": [
            5
          ],
          "key": 6,
          "name": "②点击[屏蔽]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255700",
            "https://i.gkd.li/i/13724271",
            "https://i.gkd.li/i/20585351"
          ]
        },
        {
          "matches": "@Button[text=\"继续\" || text=\"Continue\"][clickable=true] <<n [id=\"com.google.android.gm:id/my_ad_center_dialog\"]",
          "preKeys": [
            6
          ],
          "key": 7,
          "name": "③点击[继续]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255701",
            "https://i.gkd.li/i/13724287"
          ]
        },
        {
          "matches": "[vid=\"my_ad_center_close_icon\"][clickable=true]",
          "preKeys": [
            7
          ],
          "key": 8,
          "name": "④x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/13263279",
            "https://i.gkd.li/i/25543406"
          ]
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.google.android.gm:id/button_chip_ad_teaser_info_icon\"]",
          "fastQuery": true,
          "key": 0,
          "name": "点击广告扩展-1",
          "snapshotUrls": "https://i.gkd.li/i/13255698"
        },
        {
          "matches": "[id=\"com.google.android.gm:id/basic_ad_teaser_info_icon\"]",
          "fastQuery": true,
          "key": 1,
          "name": "点击广告扩展-2",
          "snapshotUrls": "https://i.gkd.li/i/13255698"
        },
        {
          "matches": "Button[text=\"屏蔽此广告\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "广告中心-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255700",
            "https://i.gkd.li/i/13724271"
          ]
        },
        {
          "matches": "Button[text=\"继续\"||text=\"Continue\"]",
          "preKeys": 2,
          "key": 3,
          "name": "点击继续确认屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255701",
            "https://i.gkd.li/i/13724287"
          ]
        },
        {
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "preKeys": 3,
          "fastQuery": true,
          "key": 4,
          "name": "关闭弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13263279"
        }
      ]
    },
    {
      "name": "局部广告-首页卡片",
      "desc": "邮件页顶部[试用Google Woekspace]",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "Button - View[desc=\"\"] < @View[childCount=2][clickable=true][width=102 && height=102][visibleToUser=true] - TextView <n View[childCount>5 && childCount<10] <<3 ComposeView - LinearLayout <<2 [vid=\"thread_list_view\"]",
          "activityIds": "com.google.android.gm.ui.MailActivityGmail",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30378474",
          "exampleUrls": "https://e.gkd.li/357dc3c9-cf98-40b3-a01d-35bb8219dae8",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.google.android.gm:id/button_chip_ad_teaser_info_icon\"]",
          "fastQuery": true,
          "key": 0,
          "name": "点击广告扩展-1",
          "snapshotUrls": "https://i.gkd.li/import/13255698"
        },
        {
          "matches": "[id=\"com.google.android.gm:id/basic_ad_teaser_info_icon\"]",
          "fastQuery": true,
          "key": 1,
          "name": "点击广告扩展-2",
          "snapshotUrls": "https://i.gkd.li/import/13255698"
        },
        {
          "matches": "Button[text=\"屏蔽此广告\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "广告中心-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/13255700",
            "https://i.gkd.li/import/13724271"
          ]
        },
        {
          "matches": "Button[text=\"继续\"||text=\"Continue\"]",
          "preKeys": 2,
          "key": 3,
          "name": "点击继续确认屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/13255701",
            "https://i.gkd.li/import/13724287"
          ]
        },
        {
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "preKeys": 3,
          "fastQuery": true,
          "key": 4,
          "name": "关闭弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13263279"
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.google.android.gm:id/button_chip_ad_teaser_info_icon\"]",
          "quickFind": true,
          "key": 0,
          "name": "点击广告扩展-1",
          "snapshotUrls": "https://i.gkd.li/import/13255698"
        },
        {
          "matches": "[id=\"com.google.android.gm:id/basic_ad_teaser_info_icon\"]",
          "quickFind": true,
          "key": 1,
          "name": "点击广告扩展-2",
          "snapshotUrls": "https://i.gkd.li/import/13255698"
        },
        {
          "matches": "Button[text=\"屏蔽此广告\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "广告中心-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/13255700",
            "https://i.gkd.li/import/13724271"
          ]
        },
        {
          "matches": "Button[text=\"继续\"||text=\"Continue\"]",
          "preKeys": 2,
          "key": 3,
          "name": "点击继续确认屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/13255701",
            "https://i.gkd.li/import/13724287"
          ]
        },
        {
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "preKeys": 3,
          "quickFind": true,
          "key": 4,
          "name": "关闭弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13263279"
        }
      ]
    }
  ]
});
