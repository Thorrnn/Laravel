<?php

namespace App\Http\Controllers;


use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use App\Http\Requests;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\User\UpdateRequest;
use Illuminate\Contracts\Auth\Access\Authorizable;


class UserController extends Controller
{
    public function index()
    {

        $users = User::all();

        return view('users.index', compact('users'));
    }


    public function store(StoreRequest $request)
    {

        $data =$request->only(['name','surname','password', 'email', 'role']);
        $data['password'] = bcrypt($data['password']);
        User::create($data);
        return redirect()->route('users.index');
    }
    public function show($id)
    {
        $users = DB::table('users')
            ->select()
            ->where('id','=',$id)
            ->get();
        return view('users.form.show', compact('users'));
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('users.index');
    }

    public function  create()
    {
        return view('users.create');
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(UpdateRequest $request, User $user)
    {
        $data = $request->only(['name','surname','password', 'email', 'role']);
        if (isset($data['password']) && $data['password']) {
            $data['password'] = bcrypt($data['password']);
        }

        if (!isset($data['password'])) {
            unset($data['password']);
        }

        $user->update($data);


        return redirect()->route('users.index');
    }
}
