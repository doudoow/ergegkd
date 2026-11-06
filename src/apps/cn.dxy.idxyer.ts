// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "丁香园",
  "id": "cn.dxy.idxyer",
  "groups": [
    {
      "name": "局部广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_image_close\"][visibleToUser=true]",
          "activityIds": ".biz.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24851243",
            "https://i.gkd.li/i/24868496"
          ]
        },
        {
          "matches": "@[vid=\"iv_close\"] <<n [vid=\"include_ad\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24858514"
        },
        {
          "matches": "[vid=\"iv_image_close\"][visibleToUser=true]",
          "activityIds": ".biz.main.MainActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/24851243",
            "https://i.gkd.li/i/24868496"
          ]
        },
        {
          "matches": "[vid=\"include_ad\"] > [vid=\"iv_close\"][clickable=true]",
          "activityIds": ".biz.job.JobHomeActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24858514"
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".biz.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24852395",
            "https://i.gkd.li/i/24852398"
          ]
        },
        {
          "matches": "[text*=\"有帮助吗\"] + [text*=\"参与反馈\"] +n ImageView[clickable=true][width<100 && height<100]",
          "activityIds": "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity",
          "key": 1,
          "name": "内容对你有帮助吗-反馈页面",
          "snapshotUrls": "https://i.gkd.li/i/24995535"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击:x取消",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_close_open_notification\"]",
          "activityIds": ".biz.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24877703"
        }
      ]
    },
    {
      "name": "权限提示-悬浮小窗播放权限",
      "desc": "点击取消",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"开启悬浮小窗播放功能\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".common.WebViewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24865283"
        }
      ]
    },
    {
      "name": "功能类-丁香园安全中心-自动点击继续访问",
      "key": 4,
      "rules": [
        {
          "matches": "@Button[text=\"继续访问\"][clickable=true]",
          "action": "clickCenter",
          "activityIds": ".common.OuterWebViewActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24845324"
        }
      ]
    },
    {
      "name": "功能类-自动点击查看答案",
      "key": 5,
      "rules": [
        {
          "matches": [
            "@Button[text=\" 查看答案\"][clickable=true][visibleToUser=true]"
          ],
          "action": "clickCenter",
          "activityIds": [
            ".biz.post.PostDetailActivity",
            ".biz.post.CommentDetailActivity"
          ],
          "key": 0,
          "name": "点击查看答案按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/24857800",
            "https://i.gkd.li/i/24864724"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24875801"
        },
        {
          "matches": "@ImageButton[desc=\"转到上一层级\"] < [vid=\"toolbar\"]",
          "preKeys": [
            0
          ],
          "activityIds": ".biz.post.ShowAnswerActivity",
          "name": "执行返回操作",
          "snapshotUrls": "https://i.gkd.li/i/24900979",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-药品说明书-表格全屏自动横屏观看",
      "key": 6,
      "rules": [
        {
          "matches": "@TextView[text=\"横屏\"]",
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24860315"
        }
      ]
    },
    {
      "name": "功能类-自动点击查看原图",
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"iv_item_bottom_ll\"][visibleToUser=true]",
          "activityIds": ".common.image.GalleryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24865469",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动慢速x0.5_选你想要的但不要多选!",
      "desc": "适合CT,MRI影像学深入分析",
      "actionMaximum": 1,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "调出倍速栏",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "matches": "@MenuItem[text=\"0.5x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x0.5",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动慢速x0.8_选你想要的但不要多选!",
      "desc": "适合CT,MRI影像学深入分析",
      "actionMaximum": 1,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "调出倍速栏",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "matches": "@MenuItem[text=\"0.8x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x0.8",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动倍速x1.5_选你想要的但不要多选!",
      "desc": "提高观看效率",
      "actionMaximum": 1,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "调出倍速栏",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "matches": "@MenuItem[text=\"1.5x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x1.5",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动倍速x2.0_选你想要的但不要多选!",
      "desc": "极限观看效率",
      "actionMaximum": 1,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "调出倍速栏",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "matches": "@MenuItem[text=\"2x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x2.0",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动倍速x1.2⚠️选你想要的但不要多选!",
      "desc": "我们导师再也不卡壳啦",
      "key": 12,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866929",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动倍速x1.5⚠️选你想要的但不要多选",
      "desc": "显著提高讲师效率",
      "key": 13,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionCd": 300,
          "actionMaximum": 2,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866929",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动倍速x2.0⚠️选你想要的但不要多选",
      "desc": "导师讲到冒烟不带停",
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionCd": 300,
          "actionMaximum": 3,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866758",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-点击[继续访问]外链接",
      "desc": "丁香园安全中心",
      "key": 15,
      "rules": [
        {
          "matches": "@Button[text=\"继续访问\"][clickable=true]",
          "action": "clickCenter",
          "activityIds": ".common.OuterWebViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/24845324",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击[横屏]观看",
      "desc": "药品说明书-表格全屏",
      "key": 16,
      "rules": [
        {
          "matches": "@TextView[text=\"横屏\"]",
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24860315"
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动x0.5倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x0.5倍速",
      "actionMaximum": 1,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "①调出倍速栏",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "matches": "@MenuItem[text=\"0.5x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "name": "②选x0.5",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动x0.8倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x0.8倍速",
      "actionMaximum": 1,
      "key": 18,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "①调出倍速栏"
        },
        {
          "matches": "@MenuItem[text=\"0.8x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "name": "②选x0.8",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动x1.5倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x1.5倍速",
      "actionMaximum": 1,
      "key": 19,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "①调出倍速栏"
        },
        {
          "matches": "@MenuItem[text=\"1.5x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "name": "②选x1.5",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-📋病例视频自动x2.0倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x2.0倍速",
      "actionMaximum": 1,
      "key": 20,
      "rules": [
        {
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "①调出倍速栏"
        },
        {
          "matches": "@MenuItem[text=\"2x\"][clickable=true]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "name": "②选x2.0",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动x1.2倍速(❗三选一)",
      "desc": "我们导师再也不卡壳啦",
      "key": 21,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866929",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动x1.5倍速(❗三选一)",
      "desc": "显著提高讲师效率",
      "key": 22,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionCd": 300,
          "actionMaximum": 2,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866929",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-📖课程视频自动x2.0倍速(❗三选一)",
      "desc": "导师讲到冒烟不带停",
      "key": 23,
      "rules": [
        {
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "actionCd": 300,
          "actionMaximum": 3,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24866758",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动解除医学领域图片内容",
      "desc": "查看-返回操作",
      "key": 24,
      "rules": [
        {
          "matches": "[childCount=9] >2 [desc^=\"涉及医学专业领域的\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": ".biz.post.PostDetailActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25459917"
        },
        {
          "matches": "[vid=\"toolbar\"]",
          "action": "back",
          "preKeys": [
            0
          ],
          "activityIds": ".common.WebViewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25459975",
          "key": 1
        }
      ]
    }
  ]
});
