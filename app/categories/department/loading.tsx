import dynamic from 'next/dynamic'
const LoadingView = dynamic(() => import('../../../components/LoadingSkelecton'))


export default function Loading(){
  return <LoadingView />
}