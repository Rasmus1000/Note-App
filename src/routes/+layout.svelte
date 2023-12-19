<h1><span>Note</span>App</h1>
<nav>
    <a href="/"><button>Main View</button></a>
    <a href="/add"><button>Add Courses</button></a>
    <a href="/list"><button>List Notes</button></a>
    <a href="/notes"><button>Create Notes</button></a>

</nav>
<slot />

<style>
    h1{
        text-decoration: underline;
        text-decoration-color: black;
    }
    span{
        color: rgb(10, 110, 110);
    }
    a{
        color: inherit;
        text-decoration: inherit;
    }
    button{
        height: 30px;
        width: 95px;
        background-color: rgb(10, 110, 110);
        border-radius: 10px;
        border: solid 2px white;
        color: white;
    }
    button:disabled{
        color: #aaaaaa;
    }
    button:enabled:hover{
        border: transparent;
    }
</style>