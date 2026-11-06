// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "曲奇云盘",
  "id": "com.quqi.quqioffice",
  "groups": [
    {
      "name": "全屏广告-私人云看图弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -(2,3) [childCount=1] > FrameLayout[childCount=1] >(1,2) ImageView[childCount=0][id=null]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12854650",
            "https://i.gkd.li/i/12854723",
            "https://i.gkd.li/i/12854664"
          ]
        },
        {
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12877535"
        },
        {
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12877540"
        }
      ]
    },
    {
      "name": "未分类-私人云-看图-弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout > FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12854650",
            "https://i.gkd.li/i/12854723"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12877535"
          ],
          "key": 1
        },
        {
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -2n FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12854664",
          "key": 2
        },
        {
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12877540",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-私人云-看图-弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayout > FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12854650",
            "https://i.gkd.li/import/12854723"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12877535"
          ],
          "key": 1
        },
        {
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -2n FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12854664",
          "key": 2
        },
        {
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12877540",
          "key": 3
        }
      ]
    },
    {
      "name": "私人云-看图-弹窗广告",
      "desc": "在线私人云看图片自动弹出自动播放可跳过广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout > FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12854650",
            "https://i.gkd.li/import/12854723"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text$=\"s\"] + TextView[text$=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12877535"
          ],
          "key": 1
        },
        {
          "matches": "TextView[text*=\"应用名称\"] < LinearLayout -2n FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12854664",
          "key": 2
        },
        {
          "matches": "ImageView[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12877540",
          "key": 3
        }
      ]
    }
  ]
});
