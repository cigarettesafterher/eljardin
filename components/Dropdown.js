import { Menu, Transition} from '@headlessui/react'

function MyDropdown() {
    return (
      <Menu>
           <div><h4 className="font-bold text-[#363636] text-xl px-4"> MyCollectives</h4></div>
       
       
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <a
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#baf0a9]  text-sm px-5"> #cigsafterher </div>
            </a>
         
        </Menu.Item>
                </Menu.Items>
              </div>
              
           





             
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <a
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#838383] text-sm px-5"> #galeria2 </div>
            </a>
         
        </Menu.Item>
                </Menu.Items>
              </div>
                 
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <a
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#838383] text-sm px-5"> #galeria3 </div>
            </a>
         
        </Menu.Item>
                </Menu.Items>
              </div>
            

            
          
      
      </Menu>
    )
  }
  export default MyDropdown;