<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>


        <!--<ul class="mui-table-view">-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left"-->
                         <!--src="http://www.xiaohuar.com/d/file/20150221175512120.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间：2019-12-12 12：12：12</span>-->
                            <!--<span>点击：0</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left"-->
                         <!--src="http://www.xiaohuar.com/d/file/20150221175512120.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间：2019-12-12 12：12：12</span>-->
                            <!--<span>点击：0</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left"-->
                         <!--src="http://www.xiaohuar.com/d/file/20150221175512120.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间：2019-12-12 12：12：12</span>-->
                            <!--<span>点击：0</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->

        <!--</ul>-->
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "NewsList",
        data() {
            return {
                newslist: []//新闻列表
            };
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {//获取新闻列表
                this.$http.get('api/getnewslist').then(result => {
                    if (result.body.status === 0) {
                        this.newslist = result.body.message;

                    } else {
                        Toast('获取新闻列表失败！')

                    }
                });

            }
        }
    };
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #aaaaaa;
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>