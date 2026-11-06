// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "皮皮搞笑",
  "id": "cn.xiaochuankeji.zuiyouLite",
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
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14546304"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745095",
            "https://i.gkd.li/i/13387320"
          ]
        },
        {
          "matches": "[id$=\"spalsh_ad_view\"] >4 [id$=\"native_container\"] >2 [id=\"cn.xiaochuankeji.zuiyouLite:id/contentView\"]",
          "position": {
            "left": "width * 0.8778",
            "top": "width * 0.1667"
          },
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13399391",
          "exampleUrls": "https://m.gkd.li/57941037/485963ab-07b1-412a-a932-badc50cb2688"
        },
        {
          "matches": "[id$=\"spalsh_ad_view\"] >4 [id$=\"native_container\"] >2 [vid=\"contentView\"]",
          "position": {
            "left": "width * 0.8778",
            "top": "width * 0.1667"
          },
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13399391",
          "exampleUrls": "https://m.gkd.li/57941037/485963ab-07b1-412a-a932-badc50cb2688"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.zuiyouLite:id/ad_remove\"]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13387116"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不喜欢广告主\"]",
          "preKeys": [
            2
          ],
          "name": "点击[不喜欢广告主]",
          "snapshotUrls": "https://i.gkd.li/i/13387155",
          "key": 1
        },
        {
          "matches": "[vid=\"ad_remove\"]",
          "key": 2,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13387116"
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.zuiyouLite:id/ad_remove\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13387116"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不喜欢广告主\"]",
          "preKeys": 0,
          "name": "点击【不喜欢广告主】",
          "snapshotUrls": "https://i.gkd.li/i/13387155",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[id=\"cn.xiaochuankeji.zuiyouLite:id/ad_remove\"] - [id=\"cn.xiaochuankeji.zuiyouLite:id/post_review_ad_logo\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13387116"
        },
        {
          "matches": "@TextView[text=\"不喜欢广告主\"] - [id=\"cn.xiaochuankeji.zuiyouLite:id/feedback_general_icon\"]",
          "preKeys": 0,
          "name": "点击【不喜欢广告主】",
          "snapshotUrls": "https://i.gkd.li/import/13387155",
          "key": 1
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.zuiyouLite:id/young_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.zuiyouLite:id/ad_remove\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13387116"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不喜欢广告主\"]",
          "preKeys": 0,
          "name": "点击【不喜欢广告主】",
          "snapshotUrls": "https://i.gkd.li/import/13387155",
          "key": 1
        }
      ]
    }
  ]
});
