<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Debt;

class DebtController extends Controller
{
    public function readAll(){

        $debts = Debt::all();
        return $this->sendData($debts);

    }

    public function readAllByCPF($cpf){

        $debts = Debt::where('cpf', $cpf)->get();
        return $this->sendData($debts);

    }
    
    public function create(Request $request){
        
        $data = $request->all();
        $res = Debt::create($data);
        if($res){
            return $this->sendSuccess("Cadastrado com sucesso", $res->id);
        }else{
            return $this->sendError("Falha ao cadastrar débito");
        }

    }

    public function update($id, Request $request){

        $data = $request->all();
        $debt = Debt::find($id);
        if(!isset($debt)){
            return $this->sendError("Débito não encontrado", 404);
        }
        $res = $debt->update($data);
        if($res){
            return $this->sendSuccess("Alterado com sucesso");
        }else{
            return $this->sendError("Falha ao alterar débito");
        }

    }

    public function delete($id){

        $debt = Debt::find($id);
        if(!isset($debt)){
            return $this->sendError("Débito não encontrado", 404);
        }
        $res = $debt->delete();
        if($res){
            return $this->sendSuccess("Removido com sucesso");
        }else{
            return $this->sendError("Falha ao remover débito");
        }

    }
}
