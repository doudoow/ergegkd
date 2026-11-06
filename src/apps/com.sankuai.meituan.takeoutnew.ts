// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美团外卖",
  "id": "com.sankuai.meituan.takeoutnew",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel\"]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13415044",
          "key": 0
        },
        {
          "matches": "[id=\"com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"wm_upgrade_force_cancel\"]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13415044",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13175526"
        },
        {
          "matches": "ImageView < @[clickable=true] - FrameLayout >5 [text=\"外卖神券\"][visibleToUser=true]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25865139",
          "exampleUrls": "https://e.gkd.li/b82ac99a-4902-453f-a59d-a11bf55560aa"
        }
      ]
    },
    {
      "name": "局部广告-直播悬浮窗",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + [text=\"正在讲解\"]",
          "activityIds": "com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16359035",
          "exampleUrls": "https://e.gkd.li/d7119268-6710-4bf4-a46c-eaefa4105791",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-付款后广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"送亲友\"] <2 FrameLayout[childCount=2] > [text=\"暂时放弃\"][clickable=true]",
          "key": 0,
          "name": "美团买药弹窗-点击[暂时放弃]"
        },
        {
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "key": 1,
          "name": "领取外卖神卷-点击底部【x】",
          "snapshotUrls": "https://i.gkd.li/i/13175526"
        }
      ]
    },
    {
      "name": "全屏广告-付款后广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"送亲友\"] <2 FrameLayout[childCount=2] > [text=\"暂时放弃\"][clickable=true]",
          "key": 0,
          "name": "美团买药弹窗-点击[暂时放弃]"
        },
        {
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "key": 1,
          "name": "领取外卖神卷-点击底部【x】",
          "snapshotUrls": "https://i.gkd.li/import/13175526"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "付款后广告弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"送亲友\"] <2 FrameLayout[childCount=2] > [text=\"暂时放弃\"][clickable=true]",
          "key": 0,
          "name": "美团买药弹窗-点击[暂时放弃]"
        },
        {
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "key": 1,
          "name": "领取外卖神卷-点击底部【x】",
          "snapshotUrls": "https://i.gkd.li/import/13175526"
        }
      ]
    }
  ]
});
