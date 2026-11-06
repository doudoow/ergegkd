// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "番茄音乐（原畅听音乐）",
  "id": "com.xs.fm.lite",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text=\"开心收下\" || text=\"前往领取\"][visibleToUser=true]",
          "activityIds": [
            "com.dragon.read.pages.main.MainFragmentActivity",
            "com.bytedance.polaris.impl.view.BulletSingleContainerActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25246321",
            "https://i.gkd.li/i/25246625",
            "https://i.gkd.li/i/25245765"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"添加番茄音乐组件\"][visibleToUser=true]",
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25246270"
        },
        {
          "matches": "@ImageView[clickable=true] <3 ViewGroup[childCount=3] < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24908945"
        },
        {
          "matches": "@FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text=\"开心收下\" || text=\"前往领取\"][visibleToUser=true]",
          "activityIds": [
            "com.dragon.read.pages.main.MainFragmentActivity",
            "com.bytedance.polaris.impl.view.BulletSingleContainerActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/25246321",
            "https://i.gkd.li/i/25246625",
            "https://i.gkd.li/i/25245765"
          ]
        },
        {
          "matches": "@[text=\"狠心离开\"] - FrameLayout > [text=\"立即领取\"]",
          "activityIds": "com.bytedance.polaris.impl.view.BulletSingleContainerActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25367580"
        }
      ]
    },
    {
      "name": "分段广告",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"领取成功\"][clickable=true][visibleToUser=true][childCount=1]",
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25246506"
        },
        {
          "matches": "@View[clickable=true][width<90 && height<90] -2 ScrollView < View[childCount=3]",
          "preKeys": [
            0
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25246616"
        }
      ]
    },
    {
      "name": "功能类-自动展开回复",
      "desc": "点击[展开XX条回复]",
      "key": 2,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] > TextView[text^=\"展开\"][text$=\"回复\"][visibleToUser=true]",
          "activityIds": "com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25246736",
          "key": 0
        },
        {
          "matches": "@ViewGroup[clickable=true] > TextView[text^=\"展开\"][text$=\"条回复\"][visibleToUser=true]",
          "activityIds": "com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25246736",
            "https://i.gkd.li/i/25282147"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-关联抖音账号登录弹窗",
      "desc": "x掉",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<66 && height<66] <<3 [id=\"android:id/content\"]",
          "activityIds": "com.xs.fm.live.impl.ecom.mall.auth.DouyinAuthActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25367551"
        },
        {
          "matches": "[text=\"关联抖音后解锁更多功能体验\"] - ImageView[clickable=true][visibleToUser=true][width<66 && height<66]",
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25367549"
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<45 && height<45] +2 [text=\"回推荐继续听歌\"]",
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25367586"
        }
      ]
    }
  ]
});
