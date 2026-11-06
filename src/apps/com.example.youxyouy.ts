// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "有鱼生活",
  "id": "com.example.youxyouy",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/20637763",
            "https://i.gkd.li/i/20637764"
          ],
          "exampleUrls": "https://e.gkd.li/ddeb0c34-6a3d-407d-b600-96d21dd1f77b",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-视频广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "anyMatches": [
            "ImageView[id=\"com.example.youxyouy:id/iv_cancel\"]",
            "ImageView[id=\"com.example.youxyouy:id/iv_close\"]",
            "[id=\"com.example.youxyouy:id/tv_exit\"][text=\"退出\"]",
            "[id=\"com.example.youxyouy:id/tv_action\"][text=\"确定\"]",
            "[id=\"com.example.youxyouy:id/iv_replay\"][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18878136",
            "https://i.gkd.li/i/18929693",
            "https://i.gkd.li/i/18878152",
            "https://i.gkd.li/i/18878154",
            "https://i.gkd.li/i/18878101"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-SDK广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "anyMatches": [
            "TextView[text=\"跳过\"]",
            "@ImageView < LinearLayout < LinearLayout - FrameLayout > TextView[text=\"反馈\"]",
            "@Image[text!=null] < View < View - View > TextView[text=\"任意滑动领取奖励\"]",
            "TextView[text=\"继续播放视频\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": [
            "https://i.gkd.li/i/19117630",
            "https://i.gkd.li/i/19117646",
            "https://i.gkd.li/i/19160331",
            "https://i.gkd.li/i/19160329"
          ],
          "key": 0
        },
        {
          "anyMatches": [
            "TextView[text=\"继续观看\"]",
            "@ImageView < ViewGroup < ViewGroup < ViewGroup[desc=\"close_button\"] - ViewGroup > ViewGroup > TextView[text=\"立即获取\"]"
          ],
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/19117637",
            "https://i.gkd.li/i/19117609"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.example.youxyouy:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19019416",
            "https://i.gkd.li/i/19019419"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-长按加速视频(5秒)",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"长按加速视频\"]",
          "action": "swipe",
          "snapshotUrls": "https://i.gkd.li/i/19160328",
          "key": 0
        }
      ]
    }
  ]
});
