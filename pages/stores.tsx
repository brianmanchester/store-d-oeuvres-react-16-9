import type { NextPage } from 'next';
import ShrimpIncrementor from '../components/incrementors/shrimp';
import SlidersIncrementor from '../components/incrementors/sliders';
import GreatGrandParentWithChildrenPropTopLeft from '../components/tree-one/great-grand-parent';
import GreatGrandParentNoChildrenPropTopRight from '../components/tree-two/great-grand-parent';
import GrandParentTopLeft from '../components/tree-one/grand-parent';
import ParentTopLeft from '../components/tree-one/parent';
import ChildTopLeft from '../components/tree-one/child';
import GreatGrandParentWithChildrenBottomLeft from '../components/tree-three/great-grand-parent';
import GrandParentBottomLeft from '../components/tree-three/grand-parent';
import ParentBottomLeft from '../components/tree-three/parent';
import ChildBottomLeft from '../components/tree-three/child';
import GreatGrandParentNoChildrenPropBottomRight from '../components/tree-four/great-grand-parent';
import Layout from '../components/layout';
import { Names } from '../components/types';
import ShrimpCount from '../components/counts/shrimp';
import SlidersCount from '../components/counts/sliders';

const NamesTL: Names = {
  ggp: 'GGP-TL',
  gp: 'GP-TL',
  p: 'P-TL',
  c: 'C-TL',
};

const Stores: NextPage = () => {
  const NamesTR: Names = {
    ggp: 'GGP-TR',
    gp: 'GP-TR',
    p: 'P-TR',
    c: 'C-TR',
  };
  
  const NamesBL: Names = {
    ggp: 'GGP-BL',
    gp: 'GP-BL',
    p: 'P-BL',
    c: 'C-BL',
  };

  return (
    <Layout>
      <div className="w-screen grid place-items-center">
        <div className="flex justify-center items-start mt-4 gap-4" style={{ width: 792 }}>
          <div className="w-96 flex justify-center items-start">
            <ShrimpCount />
          </div>
          <div className="w-96 flex justify-center items-start">
            <SlidersCount />
          </div>
        </div>
        <div className="flex justify-center items-start mt-4 gap-4" style={{ width: 792 }}>
          <div className="w-96 flex justify-center items-start">
            <ShrimpIncrementor />
          </div>
          <div className="w-96 flex justify-center items-start">
            <SlidersIncrementor />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start gap-4 mt-4">
        <GreatGrandParentWithChildrenPropTopLeft names={NamesTL}>
          <GrandParentTopLeft names={NamesTL}>
            <ParentTopLeft names={NamesTL}>
              <ChildTopLeft names={NamesTL} />
            </ParentTopLeft>
          </GrandParentTopLeft>
        </GreatGrandParentWithChildrenPropTopLeft>
        <GreatGrandParentNoChildrenPropTopRight names={NamesTR} />
      </div>
      <div className="flex justify-center items-start gap-4 mt-4">
        <GreatGrandParentWithChildrenBottomLeft names={NamesBL}>
          <GrandParentBottomLeft names={NamesBL}>
            <ParentBottomLeft names={NamesBL}>
              <ChildBottomLeft names={NamesBL} />
            </ParentBottomLeft>
          </GrandParentBottomLeft>
        </GreatGrandParentWithChildrenBottomLeft>
        <GreatGrandParentNoChildrenPropBottomRight />
      </div>
    </Layout>
  );
}

export default Stores;
