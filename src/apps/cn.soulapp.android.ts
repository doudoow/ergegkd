// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Soul",
  "id": "cn.soulapp.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20139575"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20139739"
        },
        {
          "matches": "[id=\"cn.soulapp.android:id/c_ad_skip_view_btn\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12833280",
            "https://i.gkd.li/i/12850094"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-广场页卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/sl_ad_root\"] >n [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "activityIds": "cn.soulapp.android.component.startup.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12838000",
          "key": 0
        },
        {
          "matches": "[vid=\"sl_ad_root\"] >n [vid=\"fl_tag_container\"]",
          "activityIds": ".component.startup.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12838000",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-app评分",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[vid=\"score_message\"][visibleToUser=true]",
            "[vid=\"cancel\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".component.chat.ConversationActivity",
            ".component.startup.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13425057",
            "https://i.gkd.li/i/18423888"
          ],
          "exampleUrls": "https://e.gkd.li/4f67640e-836c-4b17-9870-5bb8b8547462",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13693361",
            "https://i.gkd.li/i/18096443"
          ],
          "exampleUrls": "https://e.gkd.li/b8aedb39-1ef1-4b41-80da-0948614d9c7f"
        },
        {
          "matches": "[text=\"升级体验\"] - [text=\"关闭\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15034131",
          "exampleUrls": "https://e.gkd.li/8980a9a6-5ea3-4d61-afdb-e22ffbf1cbde"
        },
        {
          "matches": "@[vid=\"img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13693361",
            "https://i.gkd.li/i/18096443"
          ],
          "exampleUrls": "https://e.gkd.li/b8aedb39-1ef1-4b41-80da-0948614d9c7f"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"消息通知显示消息内容\"] +3 [vid=\"img_close\"]",
          "activityIds": ".component.startup.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14332334",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-帖子详情页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] <2 * < [vid=\"tvAdClose\"]",
          "activityIds": "cn.soulapp.android.component.square.post.base.detail.PostDetailActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14332294"
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] >2 [text=\"广告\"]",
          "activityIds": "cn.soulapp.android.component.square.post.base.detail.PostDetailActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14359616"
        },
        {
          "matches": "@ImageView[visibleToUser=true] <2 * < [vid=\"tvAdClose\"]",
          "activityIds": ".component.square.post.base.detail.PostDetailActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14332294"
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] >2 [text=\"广告\"]",
          "activityIds": ".component.square.post.base.detail.PostDetailActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14359616"
        }
      ]
    },
    {
      "name": "全屏广告-送礼开聊会话",
      "desc": "自动点击先不聊了",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"cl_gift_normal\"] > TextView[vid=\"tv_btn_close\"]",
          "activityIds": ".component.chat.ConversationActivity",
          "snapshotUrls": "https://i.gkd.li/i/19448971",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-推荐页领金币",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"tslAdLayout\"] [vid=\"tv_cancel\"]",
          "activityIds": ".component.startup.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/21900487",
          "exampleUrls": "https://e.gkd.li/f721ac73-f66c-45ca-8660-0c3e57845fd9",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广场页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/sl_ad_root\"] >n [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/12838000",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-app评分",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/score_message\"] +3 [id=\"cn.soulapp.android:id/cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425057",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13693361",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广场-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@ImageView - [text=\"广告\"] < LinearLayout < [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/12838000",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-app评分",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/cancel\"][text=\"取消\"] - [id=\"cn.soulapp.android:id/score_rate\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425057",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-升级到最新版本",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "snapshotUrls": "https://i.gkd.li/import/13693361",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/btn_sure\"]",
          "snapshotUrls": "https://i.gkd.li/import/12834093",
          "key": 0
        }
      ]
    },
    {
      "name": "广场页卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/sl_ad_root\"] >n [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/12838000",
          "key": 0
        }
      ]
    },
    {
      "name": "app评分",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"cn.soulapp.android:id/score_message\"] +3 [id=\"cn.soulapp.android:id/cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425057",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "snapshotUrls": "https://i.gkd.li/import/13693361",
          "key": 0
        }
      ]
    }
  ]
});
