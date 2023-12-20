<div id="container">
    <div class="clearfix">&nbsp;</div>
    <h1><span>Note</span>App</h1>
    <nav>
        <a href="/"><button>Main View</button></a>
        <a href="/add"><button>Add Courses</button></a>
        <a href="/list"><button>List Notes</button></a>
        <a href="/notes"><button>Create Notes</button></a>

    </nav>
    <slot />
</div>

<style>
    h1{
        text-decoration: underline;
        text-decoration-color: black;
        display: flex;
        justify-content: center;
        margin-top: 0;
    }
    span{
        color: rgb(10, 110, 110);
    }
    nav{
        display: flex;
        justify-content: center;
    }
    a{
        color: inherit;
        text-decoration: inherit;
    }
    button{
        height: 40px;
        width: 120px;
        font-size: 15px;
        background-color: rgb(10, 110, 110);
        border-radius: 10px;
        border: solid 2px white;
        margin: 0 10px 0 10px;
        color: white;
    }
    button:disabled{
        color: #aaaaaa;
    }
    button:enabled:hover{
        border: transparent;
    }
    #container{
        margin: auto;
        max-width: 700px;
        min-height: 98vh;
        background-color: white;
        border-radius: 10px;
    }

</style>