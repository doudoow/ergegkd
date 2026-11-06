// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "下厨房",
  "id": "com.xiachufang",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"skip_container\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18587428",
          "exampleUrls": "https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5"
        },
        {
          "matches": "([text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([visibleToUser=true][text*=\"跳过\"][text.length<10][width<500 && height<200])",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19724959",
            "https://i.gkd.li/i/19724417"
          ],
          "exampleUrls": "https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad"
        },
        {
          "matches": "[vid=\"skip_container\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18587428",
          "exampleUrls": "https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/19724417"
        },
        {
          "matches": "@[text.length<10][text*=\"跳过\"] + * > [text*=\"跳转\"][text$=\"第三方应用\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/19724959",
          "exampleUrls": "https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad"
        },
        {
          "matches": "@View[clickable=true][width<135 && height<135] <3 FrameLayout <2 FrameLayout < [vid=\"ad_container\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/27316377",
          "exampleUrls": "https://e.gkd.li/e7a1e2b1-5694-40cf-9db4-68983de45a9a"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xiachufang:id/ad_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13348710"
        },
        {
          "matches": "[id=\"com.xiachufang:id/jad_feed_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13363079"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13454534"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13484117"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout[childCount=2] > LinearLayout[childCount=2] > [text^=\"立即\"]",
          "activityIds": ".activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18249193",
          "exampleUrls": "https://e.gkd.li/f9b63d84-3363-4330-93b9-156d6f3d3d32"
        },
        {
          "matches": "[vid=\"ad_close\" || vid=\"jad_feed_close\" || vid=\"icon_close\"][clickable=true]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13348710",
            "https://i.gkd.li/i/13363079",
            "https://i.gkd.li/i/28334762"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][width<115] + [text*=\"应用\"][text*=\"隐私协议\"][text.length>10]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/34166241"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/13454534"
        },
        {
          "matches": "@[name$=\"ImageView\" || clickable=true][width<68] < [childCount=1] <n * <n * >(1,2,3) [text^=\"立即\" || text^=\"马上\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"领取\" || text$=\"小程序\"][visibleToUser=true]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/13484117",
            "https://i.gkd.li/i/18249193",
            "https://i.gkd.li/i/25508978",
            "https://i.gkd.li/i/28316307"
          ],
          "exampleUrls": "https://e.gkd.li/f9b63d84-3363-4330-93b9-156d6f3d3d32"
        },
        {
          "matches": "ImageView < @[clickable=true] < ViewGroup <2 [childCount=2] <(2,3) [getChild(0).name$=\"TextView\"] <(1,2) [childCount=2] >4 [text=\"广告\"]",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/28316136",
            "https://i.gkd.li/i/28316257",
            "https://i.gkd.li/i/28316307"
          ]
        }
      ]
    },
    {
      "name": "其他-厨房问卷",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - [text^=\"厨房问卷\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13363042"
        },
        {
          "matches": "@[clickable=true][desc=\"关闭\"] - [text^=\"厨房问卷\"]",
          "activityIds": ".activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13363042",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xiachufang:id/ad_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "菜谱底部卡片广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13348710"
        },
        {
          "matches": "[id=\"com.xiachufang:id/jad_feed_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 1,
          "name": "菜谱底部卡片广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13363079"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 2,
          "name": "菜谱底部卡片广告-1-弹出窗口",
          "snapshotUrls": "https://i.gkd.li/i/13454534"
        },
        {
          "matches": "[id=\"com.xiachufang:id/fl_container\"] >6 [name=\"android.widget.ImageView\" && width=32]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 3,
          "name": "菜谱底部卡片广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13484117"
        }
      ]
    },
    {
      "name": "未分类-厨房问卷",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"厨房问卷\"] + [desc=\"关闭\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "key": 0,
          "name": "厨房问卷",
          "snapshotUrls": "https://i.gkd.li/i/13363042"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.xiachufang:id/ad_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "菜谱底部卡片广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13348710"
        },
        {
          "matches": "[id=\"com.xiachufang:id/jad_feed_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 1,
          "name": "菜谱底部卡片广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13363079"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 2,
          "name": "菜谱底部卡片广告-1-弹出窗口",
          "snapshotUrls": "https://i.gkd.li/import/13454534"
        },
        {
          "matches": "[id=\"com.xiachufang:id/fl_container\"] >6 [name=\"android.widget.ImageView\" && width=32]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "fastQuery": true,
          "key": 3,
          "name": "菜谱底部卡片广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13484117"
        }
      ]
    },
    {
      "name": "全屏广告-厨房问卷",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text^=\"厨房问卷\"] + [desc=\"关闭\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "key": 0,
          "name": "厨房问卷",
          "snapshotUrls": "https://i.gkd.li/import/13363042"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.xiachufang:id/ad_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "quickFind": true,
          "key": 0,
          "name": "菜谱底部卡片广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13348710"
        },
        {
          "matches": "[id=\"com.xiachufang:id/jad_feed_close\"][visibleToUser=true]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "quickFind": true,
          "key": 1,
          "name": "菜谱底部卡片广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13363079"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "quickFind": true,
          "key": 2,
          "name": "菜谱底部卡片广告-1-弹出窗口",
          "snapshotUrls": "https://i.gkd.li/import/13454534"
        },
        {
          "matches": "[id=\"com.xiachufang:id/fl_container\"] >6 [name=\"android.widget.ImageView\" && width=32]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "quickFind": true,
          "key": 3,
          "name": "菜谱底部卡片广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13484117"
        }
      ]
    },
    {
      "name": "厨房问卷",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[text^=\"厨房问卷\"] + [desc=\"关闭\"]",
          "activityIds": "com.xiachufang.activity.recipe.RecipeDetailActivity",
          "key": 0,
          "name": "厨房问卷",
          "snapshotUrls": "https://i.gkd.li/import/13363042"
        }
      ]
    }
  ]
});
