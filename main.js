
// Adicionar Tarefa por Modal.
Vue.component('add-tarefa',{
  data: ()=>{
    return {}
  },
  template:'#modal-template',
  methods:{
    addTarefa(event){
      this.$emit('add-item', this.txt1,this.txt2)
    }
  }
})

// Cria <ul> da Lista de Tarefas.
Vue.component('lista-tarefa',{
  template:`<div class="quadro-body">
    <ul id="S1" class="connectedSortable">
      <tarefa-lista-item v-for="(item, index) in tarefaItens" v-bind:item="item" v-bind:index="index" :key="item.id" v-on:remove="$emit('remove', index)"></tarefa-lista-item>
    </ul> 
</div>`,
  methods:{
  },
  props:['tarefaItens']
})

// Cria <li> de cada Tarefa.
Vue.component('tarefa-lista-item',{
  template:`<li class="ui-state-default">{{item.titulo}} <br/> {{item.name}}<br/><button @click="$emit('remove')" class="btn btn-default btn-sm"><i class="fa fa-trash "></i></button> <button type="button" id="btn-move" class="btn btn-default btn-sm"><i class="fa fa-arrow-right "></i> Avançar</button></li>`,
  methods:{
  },
  props:['item', 'tarefa']
})


// Main App.
new Vue({
  el:'#app',
  data:{
	showModal: false,
    tarefaLista: [{id: 'Título', titulo:'Exemplo A',name:'Tarefa Básica Diária'}, {id: 1, titulo:'Exemplo B',name:'Tarefa Básica Semanal'}]
  },
  methods:{
    removeTarefa(event){
      this.tarefaLista.splice(event, 1)
    },
    addTarefa(tarefa,item){
      this.tarefaLista.push({id:5, titulo:tarefa, name:item})
    }
  }
})
