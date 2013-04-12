var db = {
    "Administração": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/administracao/Paginas/administracao.aspx"
        , track: "administracao"
    }
    ,"Ciência da Computação": {
        url :"http://portal.fei.edu.br/pt-BR/ensino/graduacao/ciencia_da_computacao/Paginas/ciencia_da_computacao.aspx"
        , track: "cdc"
    }
    ,"Engenharia Civil": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/engenharia_civil/Paginas/default.aspx"
        , track: "engcivil"
    }
    ,"Engenharia de Automação e Controle": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_automacao_controle/Paginas/engenharia_automacao_controle.aspx"
        , track: "engautomacaoecontrole"
    }
    ,"Engenharia de Materiais": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_materiais/Paginas/engenharia_materiais.aspx"
        , track: "engmateriais"
    }
    ,"Engenharia de Produção": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_producao/Paginas/engenharia_producao.aspx"
        , track: "engproducao"
    }
    ,"Engenharia Elétrica": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_eletrica/Paginas/engenharia_eletrica.aspx"
        , track: "engeletrica"
    }
    ,"Engenharia Mecânica": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_mecanica/Paginas/engenharia_mecanica.aspx"
        , track: "engmecanica"
    }
    ,"Engenharia Química": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_quimica/Paginas/engenharia_quimica.aspx"
        , track: "engquimica"
    }
    ,"Engenharia Têxtil": {
        url: "http://portal.fei.edu.br/pt-BR/ensino/graduacao/eng_textil/Paginas/engenharia_textil.aspx"
        , track: "engtextil"
    }
}
    , combo = $('.fakeCombo').fakeCombo()
    ;

combo.on('change.url', {"db": db}, function(ev) {
    var s = this;
    if (s.value)
    {
        _gaq.push(['_trackEvent','landing','clique', ev.data.db[this.options[this.selectedIndex].label].track]);
        _gaq.push(function() { location = s.value; });
    }
});

$.each(db, function(k, v) {
    combo.append('<option value="'+v.url+'">'+k+'</option>');
});
