// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "摩托范",
  "id": "com.jdd.motorfans",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/ad_content\"] >n [id=\"com.jdd.motorfans:id/iv_close\"]",
          "activityIds": [
            ".MTMainActivity",
            ".modules.detail.DetailActivity2",
            ".search.SearchMainActivity",
            ".modules.base.FragmentContainerActivity",
            ".message.ChatDetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12733646",
            "https://i.gkd.li/i/12798654",
            "https://i.gkd.li/i/12878843",
            "https://i.gkd.li/i/12913956",
            "https://i.gkd.li/i/13188861",
            "https://i.gkd.li/i/14546613"
          ]
        },
        {
          "matches": "@ImageView - RelativeLayout > TextView[text=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12826288"
        },
        {
          "matches": "[vid=\"iv_right_top_close\" || vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": [
            "com.jdd.motorfans.MTMainActivity",
            ".modules.detail.DetailActivity2"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/17002101",
            "https://i.gkd.li/i/17078108",
            "https://i.gkd.li/i/20918047"
          ],
          "exampleUrls": "https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278"
        },
        {
          "matches": "[id=\"com.jdd.motorfans:id/ad_content\"] >n [id=\"com.jdd.motorfans:id/iv_close\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12733646",
            "https://i.gkd.li/i/12798654",
            "https://i.gkd.li/i/12878843",
            "https://i.gkd.li/i/12913956",
            "https://i.gkd.li/i/13188861",
            "https://i.gkd.li/i/12840710",
            "https://i.gkd.li/i/13188928"
          ],
          "exampleUrls": "https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif"
        },
        {
          "matches": "[vid=\"ad_content\"] >n [vid=\"iv_close\"]",
          "activityIds": [
            ".modules.detail.DetailActivity2",
            ".search.SearchMainActivity",
            ".modules.base.FragmentContainerActivity",
            ".message.ChatDetailActivity",
            ".MTMainActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12798654",
            "https://i.gkd.li/i/12878843",
            "https://i.gkd.li/i/12913956",
            "https://i.gkd.li/i/13188861",
            "https://i.gkd.li/i/14546613"
          ]
        },
        {
          "matches": "[vid=\"iv_right_top_close\" || vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": [
            ".MTMainActivity",
            ".modules.detail.DetailActivity2"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12826288",
            "https://i.gkd.li/i/17002101",
            "https://i.gkd.li/i/17078108",
            "https://i.gkd.li/i/20918047"
          ],
          "exampleUrls": "https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278"
        },
        {
          "matches": "[id=\"com.jdd.motorfans:id/ad_content\"] >n [id=\"com.jdd.motorfans:id/iv_close\"]",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/import/12733646",
            "https://i.gkd.li/import/12798654",
            "https://i.gkd.li/import/12878843",
            "https://i.gkd.li/import/12913956",
            "https://i.gkd.li/import/13188861",
            "https://i.gkd.li/import/12840710",
            "https://i.gkd.li/import/13188928"
          ],
          "exampleUrls": "https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif"
        },
        {
          "matches": "@ImageView -n RelativeLayout > TextView[text*=\"广告\"]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/import/12826288"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/recyclerView\"] > FrameLayout[id=\"com.jdd.motorfans:id/container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "key": 0,
          "name": "点关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12826382"
        },
        {
          "matches": "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/12829069",
          "key": 1
        },
        {
          "matches": [
            "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]"
          ],
          "preKeys": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829069"
          ],
          "key": 2
        },
        {
          "matches": "[vid=\"recyclerView\"] > FrameLayout[vid=\"container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "key": 3,
          "name": "点关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12826382"
        },
        {
          "matches": "TextView[vid=\"beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/12829069",
          "key": 4
        }
      ]
    },
    {
      "name": "全屏广告-文章内容页面弹窗广告",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/iv_close\"]",
          "key": 0,
          "name": "点x按钮",
          "snapshotUrls": "https://i.gkd.li/i/12888087"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "key": 1,
          "name": "点x按钮",
          "snapshotUrls": "https://i.gkd.li/i/12888087"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"close_b_t_a_i_b_no_compliance\"]",
          "activityIds": [
            ".MTMainActivity",
            ".modules.detail.DetailActivity2",
            ".cars.MotorDetailActivity2",
            ".modules.carbarn.brand.detail.MBrandDetailActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16685033",
            "https://i.gkd.li/i/16859608",
            "https://i.gkd.li/i/17162753",
            "https://i.gkd.li/i/17533553"
          ],
          "exampleUrls": "https://e.gkd.li/daf8ea52-a935-4e58-9e27-c5cb28fa9cf0",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-文章内容弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/iv_close\"]",
          "key": 0,
          "name": "点x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888087"
          ]
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/recyclerView\"] > FrameLayout[id=\"com.jdd.motorfans:id/container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "key": 0,
          "name": "点x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12826382"
          ]
        },
        {
          "matches": [
            "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]"
          ],
          "preKeys": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12829069"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/ad_content\"] >n [id=\"com.jdd.motorfans:id/iv_close\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12733646",
            "https://i.gkd.li/import/12798654",
            "https://i.gkd.li/import/12878843",
            "https://i.gkd.li/import/12913956",
            "https://i.gkd.li/import/13188861",
            "https://i.gkd.li/import/12840710",
            "https://i.gkd.li/import/13188928"
          ],
          "exampleUrls": "https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif"
        },
        {
          "matches": "@ImageView -n RelativeLayout > TextView[text*=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12826288"
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/recyclerView\"] > FrameLayout[id=\"com.jdd.motorfans:id/container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "key": 0,
          "name": "点x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12826382"
          ]
        },
        {
          "matches": [
            "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]"
          ],
          "preKeys": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12829069"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "文章内容弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.jdd.motorfans:id/iv_close\"]",
          "key": 0,
          "name": "点x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888087"
          ]
        }
      ]
    }
  ]
});
