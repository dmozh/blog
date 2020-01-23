<script context="module">
import {db} from "../fb.js"
// import "firebase/firestore"
 	export async function preload(page, session) {
 	    let confs = [];
        let courses = [];
        let certs = [];

        let fblist = await db.collection("conferences").get();
 		fblist.forEach((doc)=>{
 		    confs.push(doc.data())
        });

 		fblist = await db.collection("courses").get();
 		fblist.forEach((doc)=>{
            courses.push(doc.data())
        });

 		fblist = await db.collection("certs").get();
        fblist.forEach((doc)=>{
            certs.push(doc.data())
            console.log(doc.data())
        });

 		return {confs: confs, courses: courses, certs: certs};
 	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<script>
export let confs, courses, certs;
import { fly } from 'svelte/transition';

let name = "Можейко Данила Андреевич";

let certss = [
    {id: 1, title: "course1", url: "url"},
    {id: 2, title: "course2", url: "url"},
    {id: 3, title: "course3", url: "url"},];
</script>

<style lang="scss">
    li{
        margin-left: 20px;
    }
    .a{
        display: inline-flex;
        margin: 0 5px 0 5px;
    }
    .a:hover{
        /*position: absolute;*/
        /*font-size: 14pt;*/
        transform: scale(1.1);
        z-index: 1000;
        transition: .2s;
    }
    .cust-cont{
        display: flex;
        width: 100%;
        /*height: 600px;*/
        background: rgba(65,65,65,0.05);
        border-radius: 15px;
        padding: 1em;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        /*flex-wrap: wrap;*/
    }

    .col{
        border-radius: 10px;
        background: #f0f0f0;
        width: 90vw;
        padding: 0 0 10px 0;
        margin: 10px;
    }
    
    .certificate-block{
        width: 90vw;
    }


    .img-container, ._img{
        position: relative;
        display: flex;
        /*background: #f0f0f0;*/
        min-width: 400px;
        height: 420px;
        /*height: 100%;*/
        border-radius: 50%;

        margin-right: 25px;
    }

    .img-container::after{
        /*display: flex;*/
        /*content: '';*/
        /*width: calc(100%);*/
        /*background: rgba(0,0,0,0.2);*/
        /*height: calc(100%);*/
        /*width: 2px;*/
        /*right: -9px;*/
        /*position: absolute;*/
        /*bottom: -9px;*/
    }

    .about-container{
        position: relative;
        display: flex;
        width: 100%;
        min-height: 41vh;
        /*background: #f0f0f0;*/
        /*width: 600px;*/
    }

    .post{
        display: flex;
        margin: 15px 10px 0 10px;
     }

    .foot{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
    }

    .title{
        position: relative;
        font-size: -webkit-xxx-large;
        padding: 0 10px 0 10px;
        margin: 10px 0 10px 0;
        /*display: inline-flex;*/
        /*margin-left: 10px;*/
    }

    .title::after{
        display: flex;
        content: '';
        width: calc(100%);
        background: rgba(0,0,0,0.2);
        height: 2px;
        left: 0;
        position: absolute;
        bottom: -9px;
    }

    .links-col{
        margin: 0 10px 0 10px;
        position: relative;
    }
    .links-col::before{
        display: flex;
        content: '';
        height: calc(100%);
        background: rgba(0,0,0,0.2);
        width: 2px;
        left: -9px;
        position: absolute;
        /*top: 9px;*/
    }

    .content-container{
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        width: 100%;
    }
    .content-container:before{
        display: flex;
        content: '';
        height: calc(100%);
        background: rgba(0,0,0,0.2);
        width: 2px;
        left: -9px;
        position: absolute;
    }

    .ab-col{
        margin-top: 10px;
        height: 100%;
        width: 50%;
    }

    .link-icon{
        max-width: 35px;
        max-height: 35px;
    }
    .link-icon:hover{
        cursor: pointer;
        transform: scale(1.1);
        z-index: 100;
        /*-webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);*/
        /*box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);*/

    }
    @media (max-width: 1050px) {

            .content-container:before{
                display: flex;
                content: '';
                height: 0;
                background: rgba(0,0,0,0.2);
                width: 0;
                left: 0;
                position: absolute;
            }
            .col{
                margin-bottom: 10px;
                width: 800px
            }
            .cust-cont{
                justify-content: center;
                flex-wrap: wrap;
                /*align-items: baseline;*/
            }
            .img-container, ._img{
                min-width: 275px;
                height: 365px;
                /*width: 250px;*/
                margin-right: 0;
                margin-bottom: 15px;
            }
            .img-container::after{
                display: flex;
                content: '';
                width: calc(100%);
                background: rgba(0,0,0,0.2);
                height: 2px;
                left: 0;
                position: absolute;
                bottom: -9px;
            }
            .about-container{
                align-content: space-between;
                flex-wrap: wrap;
            }
            .links-col{
                width: 100%;
                height: 60px;
            }
            .links-col::before{
                display: flex;
                content: '';
                width: calc(100%);
                background: rgba(0,0,0,0.2);
                height: 2px;
                left: 0;
                position: absolute;
                /*top: 9px;*/
            }
            .links{
                display: inline-flex;
                height: 50px;
            }
            .link {
                height: 40px;
                margin: 0 5px 0 5px;
            }
        }
    @media (max-width: 750px) {
        .col{
            margin-bottom: 10px;
            width: 530px
        }
        .cust-cont{
            justify-content: center;
            flex-wrap: wrap;
            /*align-items: baseline;*/
        }
        .img-container, ._img{
            min-width: 275px;
            height: 365px;
            /*width: 250px;*/
            margin-right: 0;
            margin-bottom: 15px;
        }
        .img-container::after{
            display: flex;
            content: '';
            width: calc(100%);
            background: rgba(0,0,0,0.2);
            height: 2px;
            left: 0;
            position: absolute;
            bottom: -9px;
        }
        .about-container{
            align-content: space-between;
            flex-wrap: wrap;
        }
        .links-col{
            width: 100%;
            height: 60px;
        }
        .links-col::before{
            display: flex;
            content: '';
            width: calc(100%);
            background: rgba(0,0,0,0.2);
            height: 2px;
            left: 0;
            position: absolute;
            /*top: 9px;*/
        }
        .links{
            display: inline-flex;
            height: 50px;
        }
        .link {
            height: 40px;
            margin: 0 5px 0 5px;
        }

        .ab-col{
            width: 100%;
        }
    }

    @media (max-width: 460px) {
        .a{
            border-radius: 5px;
        }
        .cust-cont{
            justify-content: center;
            flex-wrap: wrap;
            /*align-items: baseline;*/
        }
        .img-container, ._img{
            min-width: 275px;
            height: 290px;
            width: 250px;
            margin-right: 0;
            margin-bottom: 15px;
        }
        .links-col::before{
            display: flex;
            content: '';
            width: calc(100%);
            background: rgba(0,0,0,0.2);
            height: 2px;
            left: 0;
            position: absolute;
            /*top: 9px;*/
        }
        .img-container::after{
                display: flex;
                content: '';
                width: calc(100%);
                background: rgba(0,0,0,0.2);
                height: 2px;
                left: 0;
                position: absolute;
                bottom: -9px;
            }
        .col{
            margin-bottom: 10px;
            width: 320px
        }
        .title{
            font-size: x-large;
            padding: 0 10px 0 10px;
        }
        h4, h5{
            font-size: large;
        }
        .about-container{
            align-content: space-between;
            flex-wrap: wrap;
        }
        .links{
            display: inline-flex;
        }
        .links-col{
            width: 100%;
            height: 60px;
        }
        .links {
            display: inline-flex;
            height: 50px;
        }
        .link{
            height: 40px;
            margin: 0 5px 0 5px;
        }
        .ab-col{
            width: 100%;
        }
    }
    @media (max-width: 360px) {

        h1{
            font-size: xx-large;
        }

        .about-container{
            align-content: space-between;
            flex-wrap: wrap;
        }

        .img-container, ._img{
            max-width: 250px; min-width: 200px;
            max-height: 260px; min-height: 260px;
        }

        .col{
            margin-bottom: 10px;
            width: 260px
        }
        .links{
            display: inline-flex;
            height: 50px;
        }
        .links-col{
            width: 100%;
            height: 60px;
        }

        .links-col::before{
            display: flex;
            content: '';
            width: calc(100%);
            background: rgba(0,0,0,0.2);
            height: 2px;
            left: 0;
            position: absolute;
            /*top: 9px;*/
        }
        .links {
            display: inline-flex;
            height: 50px;
        }
        .link{
            height: 40px;
            margin: 0 5px 0 5px;
        }
        .ab-col{
            width: 100%;
        }

    }

    .pulse {
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 0 0 rgba(149,167,255,0.27);
      animation: pulse 2s infinite;
    }
    .pulse:hover {
      animation: none;
    }

    @-webkit-keyframes pulse {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(149,167,255,0.27);
      }
      70% {
          -webkit-box-shadow: 0 0 0 5px rgba(149,167,255,0.27);
      }
      100% {
          -webkit-box-shadow: 0 0 0 0 rgba(149,167,255,0.27);
      }
    }
    @keyframes pulse {
      0% {
        -moz-box-shadow: 0 0 0 0 rgba(149,167,255,0.4);
        box-shadow: 0 0 0 0 rgba(149,167,255,0.4);
      }
      70% {
          -moz-box-shadow: 0 0 0 5px rgba(149,167,255,0);
          box-shadow: 0 0 0 5px rgba(149,167,255,0);
      }
      100% {
          -moz-box-shadow: 0 0 0 0 rgba(149,167,255,0);
          box-shadow: 0 0 0 0 rgba(149,167,255,0);
      }
    }
</style>

<h1 in:fly="{{ delay: 500, y: 500, duration: 500 }}"
    out:fly="{{ delay: 0, y: -500, duration: 500 }}">{name}</h1>
<div class="cust-cont" in:fly="{{ delay: 500, y: 500, duration: 500 }}"
                       out:fly="{{ delay: 0, y: -500, duration: 500 }}">
    <div></div>
    <div class="img-container">
        <img class="_img" src="ava.jpg">
    </div>
    <div class="del"></div>
    <div class="about-container">
        <div class="content-container">
            <div style="width: 100%;">
                Закончил бакалавриат Московского Политехнического Университета, по направлению корпаративные информационные системы.<br>
                На текущий момент обучаюсь в магистратуре Московского Политехнического Университета, по направлению "Информатика и вычислительная техника"<br>
                Работаю инжнер-программистом в области Web и AI.
            </div>
            <div class="ab-col">
            Стэк технологий который использую:
            <ul>
                <li>
                    <ul>Python3 : ~2 года использования
                        <li>aiohttp</li>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                </li>
                <li>
                    <ul>Web stack : ~1 год использования
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JS</li>
                        <li>VueJs</li>
                        <li>Svelte+Sapper</li>
                    </ul>
                </li>
                <li>
                    <ul>Java8 : ~1 год использования
                        <li>JavaFX</li>
                    </ul>
                </li>
                <li>
                    <ul>C# : обучаюсь
                        <li>WPF</li>
                        <li>ASP .NET</li>
                        <li>Unity</li>
                    </ul>
                </li>
                <li>
                    <ul>SQL
                        <li>PostgresSQL</li>
                        <li>MSSQL</li>
                    </ul>
                </li>
            </ul>
            </div>
            <div class="ab-col">Увлечения:
                <ul>
                    <li>
                        Data science and ML
                    </li>
                    <li>
                        Backend and frontend webdev
                    </li>
                    <li>
                        &nbsp;
                    </li>
                    <li>
                        Музыка
                    </li>
                    <li>
                        Эсктримальный активный отдых
                    </li>
                    <li>
                        Спорт
                    </li>
                    <li>
                        Игры
                    </li>
                    <li>
                        &nbsp;
                    </li>
                    <li>
                        Кодинг и автоматизация бытовых и рабочих процессов
                    </li>
                </ul>
            </div>
            <div style="width: 100%;">
                Портфолио можно увидеть на моем <div class="a pulse"><a href="https://github.com/dmozh" target="_blank"> Github-репозитории</a><br></div>
                Там собраны проекты которые делались мной и которые доступны для открытого размещения.
            </div>
        </div>
        <div class="links-col">
            <ul class="links">
                <li class="link">
                    <a href="https://vk.com/id53433658" target="_blank"><img src="vk-icon.png" class="link-icon"></a>
                </li>
                <li class="link">
                    <a href="https://github.com/dmozh" target="_blank"><img src="github-icon.png" class="link-icon"></a>
                </li>
                <li class="link">
                    <a href="mailto:dmozh58@gmail.com" target="_blank"><img src="mail.png" class="link-icon"></a>
                </li>
            </ul>
        </div>
    </div>
</div>



<div class="cust-cont foot" in:fly="{{ delay: 500, y: 500, duration: 500 }}"
                            out:fly="{{ delay: 0, y: -500, duration: 500 }}">
    <div class="col">
        <div class="title">Пройденные курсы</div>
        {#if courses.length>0}
            <h5 class="post">Пройдены следующие курсы:</h5>
            {#each courses as course}
                <div class="post">
                    <div style="font-size: 13pt;">{course.title}: <div class="a pulse"><a href="{course.url}">Мой прогресс</a></div></div>
                </div>
            {/each}
        {:else}
            <div class="post"><h5>Пока я не прошел никаких курсов<br><br>Нет денег :(</h5></div>
        {/if}
    </div>
    <div class="col">
        <div class="title">Конференции</div>
        {#if confs.length>0}
            <h5 class="post">Я посетил следующие конференции:</h5>
            {#each confs as conf}
                <div class="post">
                   <div style="font-size: 13pt;">Конференцию<div class="a pulse"><a href="{conf.url}" target="_blank">"{conf.title}" </a></div>в роли {conf.role}. Дата: {conf.date}</div>
                </div>
            {/each}
        {:else}
            <div class="post"><h4>Пока я не посетил никаких конференций<br>Я очень ленивый :(</h4></div>
        {/if}
    </div>
    <div class="col certificate-block">
        <div class="title">Сертификаты</div>
        {#if certs.length>0}
            <h5 class="post">Полученные сертификаты:</h5>
            {#each certs as cert}
                <div class="post">
                   <p>Сертификат по: "{cert.title}" <a href="{cert.url}">Ссылка сертификата</a></p>
                </div>
            {/each}
        {:else}
           <div class="post"><h5>Пока я не получил ни одного сертификата</h5></div>
        {/if}
    </div>
</div>
