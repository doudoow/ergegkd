// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "宝宝树孕育",
  "id": "com.babytree.apps.pregnancy",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12614757"
        },
        {
          "matches": "@View[childCount=0][clickable=true][visibleToUser=true] < RelativeLayout < FrameLayout + RelativeLayout >2 [text^=\"摇一摇\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15566228"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页右侧悬浮广告",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12614838",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹出广告(偶发)",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页右侧悬浮广告(偶发)",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12614838",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹出广告(偶发)",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12614834",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页右侧悬浮广告(偶发)",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/import/12614838",
          "key": 0
        }
      ]
    },
    {
      "name": "弹出广告(偶发)",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12614834",
          "key": 0
        }
      ]
    },
    {
      "name": "首页右侧悬浮广告(偶发)",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/import/12614838",
          "key": 0
        }
      ]
    }
  ]
});
