// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "同花顺",
  "id": "com.hexin.plat.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"android:id/title\"][childCount=0][width<150] < LinearLayout < [parent=null]",
          "position": {
            "left": "width * 3.6279",
            "top": "width * -6.5736"
          },
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16505270",
          "exampleUrls": "https://e.gkd.li/2750d496-8889-4aed-88b7-70692df44e8f"
        },
        {
          "matches": "@[id=\"android:id/title\"][childCount=0][width>=150] < LinearLayout < [parent=null]",
          "position": {
            "left": "width * 3.7",
            "top": "width * -6.9281"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17726527",
          "exampleUrls": "https://e.gkd.li/f9c7621d-8b2b-4ca8-9904-fe0bca61c43f"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24119631"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "信息流广告-点击x按钮-点击内容质量差",
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.hexin.plat.android:id/iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662754"
          ]
        },
        {
          "matches": "[id=\"com.hexin.plat.android:id/tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662781"
          ]
        },
        {
          "matches": "@[vid=\"iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662754"
          ]
        },
        {
          "matches": "[vid=\"tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662781"
          ]
        }
      ]
    },
    {
      "name": "局部广告-底部产品广告",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.hexin.plat.android:id/prod_ad\"] + [id=\"com.hexin.plat.android:id/prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662656"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"prod_ad\"] + [vid=\"prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662656"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "信息流广告-点击x按钮-点击内容质量差",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.hexin.plat.android:id/iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662754"
          ]
        },
        {
          "matches": "[id=\"com.hexin.plat.android:id/tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662781"
          ]
        }
      ]
    },
    {
      "name": "未分类-指数页面-底部产品广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.hexin.plat.android:id/prod_ad\"] + [id=\"com.hexin.plat.android:id/prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662656"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "信息流广告-点击x按钮-点击内容质量差",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.hexin.plat.android:id/iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12662754"
          ]
        },
        {
          "matches": "[id=\"com.hexin.plat.android:id/tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12662781"
          ]
        }
      ]
    },
    {
      "name": "局部广告-指数页面-底部产品广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.hexin.plat.android:id/prod_ad\"] + [id=\"com.hexin.plat.android:id/prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662656"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "信息流广告-点击x按钮-点击内容质量差",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[id=\"com.hexin.plat.android:id/iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12662754"
          ]
        },
        {
          "matches": "[id=\"com.hexin.plat.android:id/tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12662781"
          ]
        }
      ]
    },
    {
      "name": "指数页面-底部产品广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.hexin.plat.android:id/prod_ad\"] + [id=\"com.hexin.plat.android:id/prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662656"
          ],
          "key": 0
        }
      ]
    }
  ]
});
